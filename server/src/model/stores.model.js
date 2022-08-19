import mongoose from 'mongoose';
import axios from 'axios';

import Cache from '../utils/cache.utils.js';
import storesSchema from './schemas/stores.schema.js';
const storesModel = mongoose.model('store', storesSchema);

const LOMADEE_STORES_URL = process.env.LOMADEE_STORES_URL;

const STORE_VALID_KEYS = ['name', 'image'];

const cache = new Cache();

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
  const projection = {
    _id: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  const stores = await storesModel.find({}, projection);

  cache.set('all', stores);
}

async function updateStores(updatePeriod) {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  await deleteOutdatedLomadeeStores(updatePeriod);

  await cacheAllStores();
}

function getNumberOfStores() {
  return cache.get('all').length;
}

async function getStores(filters) {
  const key = filters;

  if (cache.has(key)) return cache.get(key);

  const projection = {
    _id: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  const stores = await storesModel.find(filters, projection);

  cache.set(key, stores);

  return stores;
}

function getPaginatedStores(page, limit) {
  const key = { page, limit };

  if (cache.has(key)) return cache.get(key);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const storesPage = cache
    .get('all')
    .filter((_, index) => index >= startIndex && index < endIndex);

  cache.set(key, storesPage);

  return storesPage;
}

async function adminGetStores() {
  const projection = {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  return await storesModel.find({}, projection);
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
  getNumberOfStores,
  getStores,
  getPaginatedStores,
  adminGetStores,
  adminAddStore,
  adminDeleteStores,
  adminUpdateStores
};
