import axios from 'axios';
import mongoose from 'mongoose';

import couponsSchema from './schemas/coupons.schema.js';

const couponsModel = mongoose.model('coupon', couponsSchema);

const LOMADEE_COUPONS_URL = process.env.LOMADEE_COUPONS_URL;
const TIME_LIMIT = 60 * 60 * 1000;

let couponsList = [];
let categories = [];

async function getUpdatedLomadeeCoupons() {
  const response = await axios.get(LOMADEE_COUPONS_URL, {
    responseType: 'json'
  });

  const { coupons } = response.data;

  return coupons;
}

async function saveLomadeeCoupons(coupons) {
  const schemaKeys = Object.keys(couponsSchema.paths);

  await couponsModel.bulkWrite([
    ...coupons.map((coupon) => {
      const couponKeys = Object.keys(coupon);

      let filters = schemaKeys.reduce((appliedFilters, currentKey) => {
        if (couponKeys.includes(currentKey)) {
          return {
            ...appliedFilters,
            [currentKey]: coupon[currentKey]
          };
        }

        return appliedFilters;
      }, {});

      filters = {
        ...filters,
        store: coupon.store,
        category: coupon.category
      };

      return {
        updateOne: {
          filter: { ...filters },
          update: {},
          upsert: true
        }
      };
    })
  ]);
}

async function deleteOutdatedLomadeeCoupons() {
  const lomadeeCoupons = await couponsModel.find({ source: 'Lomadee' });

  const operations = lomadeeCoupons
    .map((coupon) => {
      const timeElapsedSinceUpdate = Date.now() - new Date(coupon.updatedAt);

      if (timeElapsedSinceUpdate > TIME_LIMIT) {
        return {
          deleteOne: {
            filter: { id: coupon.id, code: coupon.code }
          }
        };
      }

      return null;
    })
    .filter(Boolean);

  await couponsModel.bulkWrite([...operations]);
}

async function cacheAllCoupons() {
  const coupons = await couponsModel.find({}, { _id: 0, __v: 0 });

  couponsList = coupons;
}

async function updateCoupons() {
  const lomadeeCoupons = await getUpdatedLomadeeCoupons();

  await saveLomadeeCoupons(lomadeeCoupons);

  await deleteOutdatedLomadeeCoupons();

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

async function getSearchedCoupons(searchTerm) {
  const term = new RegExp(searchTerm, 'i');

  return await couponsModel.find(
    {
      $or: [
        { 'store.name': term },
        { 'category.name': term },
        { description: term }
      ]
    },
    { _id: 0, __v: 0 }
  );
}

async function getActiveCouponCategories() {
  if (categories.length) return categories;

  const result = await couponsModel.distinct('category.name', {});

  if (result.length) categories = result;

  return result;
}

export {
  updateCoupons,
  getCouponsNumber,
  getFeaturedCoupons,
  getPaginatedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories
};
