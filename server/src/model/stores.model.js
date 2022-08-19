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
  const filter = { source: 'Lomadee' };

  const lomadeeStores = await storesModel.find(filter);

  const operations = lomadeeStores
    .map((store) => {
      const timeSinceUpdate = Date.now() - new Date(store.updatedAt);

      if (timeSinceUpdate > updatePeriod) {
        return {
          deleteOne: {
            filter: { _id: store._id }
          }
        };
      }

      return null;
    })
    .filter(Boolean);

  return await storesModel.bulkWrite(operations);
}

async function refreshCaching() {
  const filter = {};

  const projection = {
    _id: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  const stores = await storesModel.find(filter, projection);

  cache.clear();

  cache.set('all', stores);
}

async function updateStores(updatePeriod) {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  await deleteOutdatedLomadeeStores(updatePeriod);

  await refreshCaching();
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

  const start = (page - 1) * limit;
  const end = page * limit;

  const storesPage = cache
    .get('all')
    .filter((_, index) => index >= start && index < end);

  cache.set(key, storesPage);

  return storesPage;
}

async function adminGetStores() {
  const key = 'adminAll';

  if (cache.has(key)) return cache.get(key);

  const filter = {};

  const projection = {
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  const stores = await storesModel.find(filter, projection);

  cache.set(key, stores);

  return stores;
}

async function adminGetPaginatedStores(page, limit) {
  const key = { level: 'admin', page, limit };

  if (cache.has(key)) return cache.get(key);

  const stores = cache.has('adminAll')
    ? cache.get('adminAll')
    : await adminGetStores();

  const start = (page - 1) * limit;
  const end = page * limit;

  const storesPage = stores.filter((_, index) => index >= start && index < end);

  cache.set(key, storesPage);

  return storesPage;
}

async function adminAddStore(store) {
  const newStore = new storesModel(store);

  try {
    await newStore.save();

    refreshCaching();

    return true;
  } catch (e) {
    if (e._message === 'store validation failed') {
      return false;
    }

    throw new Error();
  }
}

async function adminDeleteStore(id) {
  const filter = { _id: id };

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) return false;

  const { acknowledged, deletedCount } = await storesModel.deleteOne(filter);

  if (!acknowledged) throw new Error();

  if (deletedCount) refreshCaching();

  return deletedCount && true;
}

async function adminUpdateStore(id, update) {
  const filter = { _id: id };

  const validId = mongoose.Types.ObjectId.isValid(id);

  if (!validId) return false;

  const { acknowledged, modifiedCount, matchedCount } =
    await storesModel.updateOne(filter, update);

  if (!acknowledged) throw new Error();

  if (!matchedCount) return false;

  if (!modifiedCount) throw new Error();

  refreshCaching();

  return true;
}

export {
  updateStores,
  getNumberOfStores,
  getStores,
  getPaginatedStores,
  adminGetStores,
  adminGetPaginatedStores,
  adminAddStore,
  adminDeleteStore,
  adminUpdateStore
};
