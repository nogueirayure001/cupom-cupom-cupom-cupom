import axios from "axios";
import mongoose from "mongoose";

import couponsSchema from "./schemas/coupons.schema.js";

const allCoupons = mongoose.model("allCoupon", couponsSchema);
const lomadeeCoupons = mongoose.model("lomadeeCoupon", couponsSchema);
const otherCoupons = mongoose.model("otherCoupon", couponsSchema);
const featureCoupons = mongoose.model("featureCoupon", couponsSchema);

class CouponsModel {
  constructor() {
    this.couponsList = [];
  }

  async updateCoupons() {
    const response = await axios.get(process.env.LOMADEE_COUPONS_URL, {
      responseType: "json",
    });

    const { coupons } = response.data;

    await lomadeeCoupons.bulkWrite([
      {
        deleteMany: {
          filter: {},
        },
      },
      ...coupons.map((coupon) => ({
        insertOne: { document: coupon },
      })),
    ]);

    const complementCoupons = await otherCoupons.find(
      {},
      {
        _id: 0,
        __v: 0,
      }
    );

    const couponsList = [...coupons, ...complementCoupons];

    await allCoupons.bulkWrite([
      {
        deleteMany: {
          filter: {},
        },
      },
      ...couponsList.map((coupon) => ({
        insertOne: { document: coupon },
      })),
    ]);

    this.couponsList = couponsList;
  }

  getCouponsNumber() {
    return this.couponsList.length;
  }

  async getFeatureCoupons() {
    return await featureCoupons.find(
      {},
      {
        _id: 0,
        __v: 0,
      }
    );
  }

  getPaginatedCoupons(page, limit) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    return this.couponsList.filter(
      (_, index) => index >= startIndex && index < endIndex
    );
  }
}

const couponsModelHandler = new CouponsModel();

export { couponsModelHandler };
