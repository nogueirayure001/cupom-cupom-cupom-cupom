import mongoose from "mongoose";
import axios from "axios";

import storesSchema from "./schemas/stores.schema.js";

const allStoresModel = mongoose.model("allStore", storesSchema);
const lomadeeStoresModel = mongoose.model("lomadeeStore", storesSchema);
const otherStoresModel = mongoose.model("otherStore", storesSchema);
const featuredStoresModel = mongoose.model("featuredStore", storesSchema);

const LOMADEE_STORES_URL = process.env.LOMADEE_STORES_URL;

let storesList = null;

async function getUpdatedLomadeeStores() {
  const response = await axios.get(LOMADEE_STORES_URL, {
    responseType: "json",
  });

  const { stores } = response.data;

  return stores;
}

async function saveLomadeeStores(stores) {
  await lomadeeStoresModel.bulkWrite([
    {
      deleteMany: {
        filter: {},
      },
    },
    ...stores.map((store) => ({
      insertOne: { document: store },
    })),
  ]);
}

async function getComplementStores() {
  return await otherStoresModel.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function saveAllStores(allStores) {
  await allStoresModel.bulkWrite([
    {
      deleteMany: {
        filter: {},
      },
    },
    ...allStores.map((store) => ({
      insertOne: { document: store },
    })),
  ]);
}

async function updateStores() {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  const complementStores = await getComplementStores();

  const allStores = [...lomadeeStores, ...complementStores];

  await saveAllStores(allStores);

  storesList = allStores;
}

function getStoresNumber() {
  return storesList.length;
}

async function getFeaturedStores() {
  return await featuredStoresModel.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

function getPaginatedStores(page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return storesList.filter(
    (_, index) => index >= startIndex && index < endIndex
  );
}

export { updateStores, getStoresNumber, getFeaturedStores, getPaginatedStores };
