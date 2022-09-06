import mongoose from 'mongoose';
import axios from 'axios';

import { config } from '../../config/config';
import Cache from '../utils/cache.utils';
import storesSchema from '../schemas/stores.schema';
import { Store } from '../schemas/stores.schema.d'

const storesModel = mongoose.model<Store>('store', storesSchema);

const LOMADEE_STORES_URL = config.dataSource.LOMADEE_STORES_URL;

const STORE_VALID_KEYS = ['name', 'image'];

const cache = new Cache();

async function getUpdatedLomadeeStores() {
  const response = await axios.get(LOMADEE_STORES_URL, {
    responseType: 'json'
  });

  const { stores } = response.data;

  const sanitizedStores = stores.map((store: any) => {
    const transformedStore: any = {};

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

async function saveLomadeeStores(stores: Array<object>) {
  const writes = stores.map((store) => ({
    updateOne: {
      filter: store,
      update: {},
      upsert: true
    }
  }));

  await storesModel.bulkWrite(writes);
}

async function deleteOutdatedLomadeeStores(updatePeriod: number) {
  const filter = { source: 'Lomadee' };

  const lomadeeStores = await storesModel.find(filter);

  const filters = lomadeeStores
    .map((store) => {
      const lastUpdate = (new Date(store.updatedAt as Date)).getTime();
      const timeSinceUpdate = Date.now() - lastUpdate;

      if (timeSinceUpdate > updatePeriod) {
        return { _id: store._id };
      }

      return null;
    })
    .filter(Boolean);

  if (!filters || !filters.length) return;

  const conditions = { $or: filters } as mongoose.FilterQuery<Store>;

  return await storesModel.deleteMany(conditions);
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

async function updateStores(updatePeriod: number) {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  await deleteOutdatedLomadeeStores(updatePeriod);

  await refreshCaching();
}

function getNumberOfStores(): number {
  const stores = cache.get('all');

  if (!Array.isArray(stores)) return 0;

  return stores.length;
}

async function getStores(filter: Store) {
  const key = filter;

  if (cache.has(key)) return cache.get(key);

  const projection = {
    _id: 0,
    __v: 0,
    createdAt: 0,
    updatedAt: 0
  };

  const stores = await storesModel.find(filter, projection);

  cache.set(key, stores);

  return stores;
}

function getPaginatedStores(page: number, limit: number) {
  const key = { page, limit };

  if (cache.has(key)) return cache.get(key);

  const stores = cache.get('all');

  if (!Array.isArray(stores)) throw new Error();

  const start = (page - 1) * limit;
  const end = page * limit;

  const storesPage = stores
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

async function adminGetPaginatedStores(page: number, limit: number) {
  const key = { level: 'admin', page, limit };

  if (cache.has(key)) return cache.get(key);

  const stores = cache.has('adminAll')
    ? cache.get('adminAll')
    : await adminGetStores();

  if (!stores || !Array.isArray(stores)) throw new Error();

  const start = (page - 1) * limit;
  const end = page * limit;

  const storesPage = stores.filter((_, index) => index >= start && index < end);

  cache.set(key, storesPage);

  return storesPage;
}

async function adminAddStore(store: Store) {
  const newStore = new storesModel(store);

  try {
    await newStore.save();

    refreshCaching();

    return true;
  } catch (e: any) {
    if (e._message === 'store validation failed') {
      return false;
    }

    throw new Error();
  }
}

async function adminDeleteStore(storeId: mongoose.Types.ObjectId) {
  const filter = { _id: storeId };

  const validId = mongoose.Types.ObjectId.isValid(storeId);

  if (!validId) return false;

  const { acknowledged, deletedCount } = await storesModel.deleteOne(filter);

  if (!acknowledged) throw new Error();

  if (deletedCount) refreshCaching();

  return deletedCount && true;
}

async function adminUpdateStore(storeId: mongoose.Types.ObjectId, update: Store) {
  const filter = { _id: storeId };

  const validId = mongoose.Types.ObjectId.isValid(storeId);

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
