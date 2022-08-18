import mongoose from 'mongoose';
import axios from 'axios';

import storesSchema from './schemas/stores.schema.js';
const storesModel = mongoose.model('store', storesSchema);

const LOMADEE_STORES_URL = process.env.LOMADEE_STORES_URL;

const STORE_VALID_KEYS = ['name', 'image'];

let storesList = [];

async function getUpdatedLomadeeStores() {
  const response = await axios.get(LOMADEE_STORES_URL, {
    responseType: 'json'
  });

  const { stores } = response.data;

  const sanitizedStores = stores.map((store) => {
    const transformedStore = {};

    const storeKeys = Object.keys(store);

    storeKeys.forEach((key) => {
      if (STORE_VALID_KEYS.includes(key)) {
        transformedStore[key] = store[key];
      }
    });

    return transformedStore;
  });

  return sanitizedStores;
}

async function saveLomadeeStores(stores) {
  const writes = stores.map((store) => ({
    updateOne: {
      filter: store,
      update: {},
      upsert: true
    }
  }));

  await storesModel.bulkWrite(writes);
}

async function deleteOutdatedLomadeeStores(updatePeriod) {
  const lomadeeStores = await storesModel.find({ source: 'Lomadee' });

  const operations = lomadeeStores
    .map((store) => {
      const timeElapsedSinceUpdate = Date.now() - new Date(store.updatedAt);

      if (timeElapsedSinceUpdate > updatePeriod) {
        return {
          deleteOne: {
            filter: { _id: store._id }
          }
        };
      }

      return null;
    })
    .filter(Boolean);

  await storesModel.bulkWrite(operations);
}

async function cacheAllStores() {
  const stores = await storesModel.find({}, { _id: 0, __v: 0 });

  storesList = stores;
}

async function updateStores(updatePeriod) {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  await deleteOutdatedLomadeeStores(updatePeriod);

  await cacheAllStores();
}

function getStoresNumber() {
  return storesList.length;
}

async function getStores(filters) {
  const projection = { _id: 0, __v: 0 };

  return await storesModel.find(filters, projection);
}

function getPaginatedStores(page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return storesList.filter(
    (_, index) => index >= startIndex && index < endIndex
  );
}

async function adminGetStores() {
  return await storesModel.find({}, { __v: 0 });
}

async function adminAddStore(store) {
  const newStore = new storesModel(store);

  try {
    await newStore.save();

    return true;
  } catch (e) {
    if (e._message === 'store validation failed') {
      return false;
    }

    throw new Error();
  }
}

async function adminDeleteStores(storesIds) {
  const writes = storesIds.map((id) => ({
    deleteOne: {
      filter: { _id: id }
    }
  }));

  const result = await storesModel.bulkWrite(writes);

  cacheAllStores();

  return result;
}

async function adminUpdateStores(updatedStores) {
  const writes = updatedStores.map(({ id, ...update }) => ({
    updateOne: {
      filter: { _id: id },
      update: update
    }
  }));

  const result = await couponsModel.bulkWrite(writes);

  cacheAllStores();

  return result;
}

export {
  updateStores,
  getStoresNumber,
  getStores,
  getPaginatedStores,
  adminGetStores,
  adminAddStore,
  adminDeleteStores,
  adminUpdateStores
};
