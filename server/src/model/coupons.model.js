import axios from 'axios';
import mongoose from 'mongoose';

import Cache from '../utils/cache.utils.js';
import couponsSchema from './schemas/coupons.schema.js';
const couponsModel = mongoose.model('coupon', couponsSchema);

const LOMADEE_COUPONS_URL = process.env.LOMADEE_COUPONS_URL;

const COUPON_VALID_KEYS = [
  'category',
  'code',
  'description',
  'link',
  'store',
  'featured',
  'source'
];

const cache = new Cache();

async function getUpdatedLomadeeCoupons() {
  const response = await axios.get(LOMADEE_COUPONS_URL, {
    responseType: 'json'
  });

  const { coupons } = response.data;

  const sanitizedCoupons = coupons.map((coupon) => {
    const transformedCoupon = {};

    const couponKeys = Object.keys(coupon);

    couponKeys.forEach((key) => {
      if (COUPON_VALID_KEYS.includes(key)) {
        if (coupon[key].hasOwnProperty('name')) {
          transformedCoupon[key] = coupon[key]['name'];

          if (coupon[key].hasOwnProperty('image')) {
            transformedCoupon['image'] = coupon[key]['image'];
          }

          return;
        }

        transformedCoupon[key] = coupon[key];
      }
    });

    return transformedCoupon;
  });

  return sanitizedCoupons;
}

async function saveLomadeeCoupons(coupons) {
  const writes = coupons.map((coupon) => ({
    updateOne: {
      filter: coupon,
      update: {},
      upsert: true
    }
  }));

  await couponsModel.bulkWrite(writes);
}

async function deleteOutdatedLomadeeCoupons(updatePeriod) {
  const filter = { source: 'Lomadee' };

  const lomadeeCoupons = await couponsModel.find(filter);

  const operations = lomadeeCoupons
    .map((coupon) => {
      const timeElapsedSinceUpdate = Date.now() - new Date(coupon.updatedAt);

      if (timeElapsedSinceUpdate > updatePeriod) {
        return {
          deleteOne: {
            filter: { _id: coupon._id }
          }
        };
      }

      return null;
    })
    .filter(Boolean);

  await couponsModel.bulkWrite(operations);
}

async function refreshCaching() {
  const filter = {};

  const projection = { _id: 0, __v: 0 };

  const coupons = await couponsModel.find(filter, projection);

  cache.clear();

  cache.set('all', coupons);
}

async function updateCoupons(updatePeriod) {
  const lomadeeCoupons = await getUpdatedLomadeeCoupons();

  await saveLomadeeCoupons(lomadeeCoupons);

  await deleteOutdatedLomadeeCoupons(updatePeriod);

  await refreshCaching();
}

// getCouponsNumber
function getNumberOfCoupons() {
  return cache.get('all').length;
}

async function getFeaturedCoupons() {
  const filter = { featured: true };

  const projection = { _id: 0, __v: 0 };

  if (cache.has('featured')) return cache.get('featured');

  const coupons = await couponsModel.find(filter, projection);

  cache.set('featured', coupons);

  return coupons;
}

function getPaginatedCoupons(page, limit) {
  const key = { page, limit };

  if (cache.has(key)) return cache.get(key);

  const start = (page - 1) * limit;
  const end = page * limit;

  const couponsPage = cache
    .get('all')
    .filter((_, index) => index >= start && index < end);

  cache.set(key, couponsPage);

  return couponsPage;
}

async function getSearchedCoupons(searchTerm, searchFilters = '') {
  const key = { searchTerm, searchFilters };

  if (cache.has(key)) return cache.get(key);

  const searchTermRegex = new RegExp(searchTerm, 'i');

  const FILTER_VALUES = {
    store: { store: searchTermRegex },
    category: { category: searchTermRegex },
    keyword: { description: searchTermRegex }
  };

  const FILTER_KEYS = Object.keys(FILTER_VALUES);

  const appliedFilters = searchFilters
    .toLowerCase()
    .split(',')
    .filter((filter) => FILTER_KEYS.includes(filter))
    .map((filter) => FILTER_VALUES[filter]);

  const filter = {
    $or: appliedFilters.length ? appliedFilters : Object.values(FILTER_VALUES)
  };

  const projection = { _id: 0, __v: 0 };

  const searchResults = await couponsModel.find(filter, projection);

  cache.set(key, searchResults);

  return searchResults;
}

async function getCategories() {
  if (cache.has('categories')) return cache.get('categories');

  const field = 'category';

  const filter = {};

  const categories = await couponsModel.distinct(field, filter);

  cache.set('categories', categories);

  return categories;
}

async function adminGetCoupons() {
  if (cache.has('adminAll')) return cache.get('adminAll');

  const filter = {};

  const projection = { __v: 0 };

  const coupons = await couponsModel.find(filter, projection);

  cache.set('adminAll', coupons);

  return coupons;
}

async function adminAddCoupon(coupon) {
  const newCoupon = new couponsModel(coupon);

  try {
    await newCoupon.save();

    refreshCaching();

    return true;
  } catch (e) {
    if (e._message === 'coupon validation failed') {
      return false;
    }

    throw new Error();
  }
}

async function adminDeleteCoupon(id) {
  const filter = { _id: id };

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) return false;

  const { acknowledged, deletedCount } = await couponsModel.deleteOne(filter);

  if (!acknowledged) throw new Error();

  if (deletedCount) refreshCaching();

  return deletedCount && true;
}

async function adminUpdateCoupon(id, update) {
  const filter = { _id: id };
  const update = update;

  const validId = mongoose.Types.ObjectId.isValid(id);
  if (!validId) return false;

  const { acknowledged, modifiedCount, matchedCount } =
    await couponsModel.updateOne(filter, update);

  if (!acknowledged) throw new Error();

  if (!matchedCount) return false;

  if (!modifiedCount) throw new Error();

  refreshCaching();

  return true;
}

export {
  updateCoupons,
  getNumberOfCoupons,
  getFeaturedCoupons,
  getPaginatedCoupons,
  getSearchedCoupons,
  getCategories,
  adminGetCoupons,
  adminAddCoupon,
  adminDeleteCoupon,
  adminUpdateCoupon
};
