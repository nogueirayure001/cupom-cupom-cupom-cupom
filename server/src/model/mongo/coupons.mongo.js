import mongoose from "mongoose";

const couponsSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  store: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  category: {
    name: {
      type: String,
      required: true,
    },
  },
  vigency: {
    type: String,
  },
  link: {
    type: String,
  },
  new: {
    type: Boolean,
  },
});

const MODELS = {
  allCoupons: mongoose.model("allCoupon", couponsSchema),
  lomadeeCoupons: mongoose.model("lomadeeCoupon", couponsSchema),
  otherCoupons: mongoose.model("otherCoupon", couponsSchema),
  featureCoupons: mongoose.model("featureCoupon", couponsSchema),
};

export const { allCoupons, lomadeeCoupons, otherCoupons, featureCoupons } =
  MODELS;
