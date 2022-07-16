import { Schema, model } from "mongoose";

const storesSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const MODELS = {
  allStores: model("allStore", storesSchema),
  featureStores: model("featureStore", storesSchema),
};

module.exports = {
  ...MODELS,
};
