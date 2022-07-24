import axios from "axios";
import mongoose from "mongoose";

import couponsSchema from "./schemas/coupons.schema.js";

const allCouponsModel = mongoose.model("allCoupon", couponsSchema);
const lomadeeCouponsModel = mongoose.model("lomadeeCoupon", couponsSchema);
const otherCouponsModel = mongoose.model("otherCoupon", couponsSchema);
const featuredCouponsModel = mongoose.model("featuredCoupon", couponsSchema);

const LOMADEE_COUPONS_URL = process.env.LOMADEE_COUPONS_URL;

let couponsList = null;

async function getUpdatedLomadeeCoupons() {
  const response = await axios.get(LOMADEE_COUPONS_URL, {
    responseType: "json",
  });

  const { coupons } = response.data;

  return coupons;
}

async function saveLomadeeCoupons(coupons) {
  await lomadeeCouponsModel.bulkWrite([
    {
      deleteMany: {
        filter: {},
      },
    },
    ...coupons.map((coupon) => ({
      insertOne: { document: coupon },
    })),
  ]);
}

async function getComplementCoupons() {
  return await otherCouponsModel.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function saveAllCoupons(allCoupons) {
  await allCouponsModel.bulkWrite([
    {
      deleteMany: {
        filter: {},
      },
    },
    ...allCoupons.map((coupon) => ({
      insertOne: { document: coupon },
    })),
  ]);
}

async function updateCoupons() {
  const lomadeeCoupons = await getUpdatedLomadeeCoupons();

  await saveLomadeeCoupons(lomadeeCoupons);

  const complementCoupons = await getComplementCoupons();

  const allCoupons = [...lomadeeCoupons, ...complementCoupons];

  await saveAllCoupons(allCoupons);

  couponsList = allCoupons;
}

function getCouponsNumber() {
  return couponsList.length;
}

async function getFeaturedCoupons() {
  return await featuredCouponsModel.find(
    {},
    {
      _id: 0,
      __v: 0,
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

export {
  updateCoupons,
  getCouponsNumber,
  getFeaturedCoupons,
  getPaginatedCoupons,
};
