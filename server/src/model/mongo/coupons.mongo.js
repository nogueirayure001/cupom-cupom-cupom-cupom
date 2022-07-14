const mongoose = require("mongoose");

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
  allCouponsModel: mongoose.model("allCoupon", couponsSchema),
  lomadeeCouponsModel: mongoose.model("lomadeeCoupon", couponsSchema),
  miscellaneousCouponsModel: mongoose.model(
    "miscellaneousCoupon",
    couponsSchema
  ),
};

module.exports = { ...MODELS };
