import axios from 'axios';
import mongoose from 'mongoose';

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

let couponsList = [];
let categories = [];

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
      filter: { ...coupon, source: 'Lomadee' },
      update: {},
      upsert: true
    }
  }));

  await couponsModel.bulkWrite(writes);
}

async function deleteOutdatedLomadeeCoupons(updatePeriod) {
  const lomadeeCoupons = await couponsModel.find({ source: 'Lomadee' });

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

async function cacheAllCoupons() {
  const coupons = await couponsModel.find({}, { _id: 0, __v: 0 });

  couponsList = coupons;
}

async function updateCoupons(updatePeriod) {
  const lomadeeCoupons = await getUpdatedLomadeeCoupons();

  await saveLomadeeCoupons(lomadeeCoupons);

  await deleteOutdatedLomadeeCoupons(updatePeriod);

  await cacheAllCoupons();
}

function getCouponsNumber() {
  return couponsList.length;
}

async function getFeaturedCoupons() {
  return await couponsModel.find(
    { featured: true },
    {
      _id: 0,
      __v: 0
    }
  );
}

function getPaginatedCoupons(page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return couponsList.filter(
    (_, index) => index >= startIndex && index < endIndex
  );
}

async function getSearchedCoupons(searchTerm, searchFilters = '') {
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

  return await couponsModel.find(
    {
      $or: appliedFilters.length ? appliedFilters : Object.values(FILTER_VALUES)
    },
    { _id: 0, __v: 0 }
  );
}

async function getActiveCouponCategories() {
  if (categories.length) return categories;

  const result = await couponsModel.distinct('category', {});

  if (result.length) categories = result;

  return result;
}

async function adminGetCoupons() {
  return await couponsModel.find({}, { __v: 0 });
}

async function adminAddCoupon(coupon) {
  const newCoupon = new couponsModel(coupon);

  try {
    await newCoupon.save();

    return true;
  } catch (e) {
    if (e._message === 'coupon validation failed') {
      return false;
    }

    throw new Error();
  }
}

async function adminDeleteCoupons(couponsIds) {
  const writes = couponsIds.map((id) => ({
    deleteOne: {
      filter: { _id: id }
    }
  }));

  const result = await couponsModel.bulkWrite(writes);

  cacheAllCoupons();

  return result;
}

async function adminUpdateCoupons(updatedCoupons) {
  const writes = updatedCoupons.map(({ id, ...update }) => ({
    updateOne: {
      filter: { _id: id },
      update: update
    }
  }));

  const result = await couponsModel.bulkWrite(writes);

  cacheAllCoupons();

  return result;
}

export {
  updateCoupons,
  getCouponsNumber,
  getFeaturedCoupons,
  getPaginatedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories,
  adminGetCoupons,
  adminAddCoupon,
  adminDeleteCoupons,
  adminUpdateCoupons
};
