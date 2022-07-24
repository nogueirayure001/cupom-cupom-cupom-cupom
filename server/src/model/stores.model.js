import mongoose from 'mongoose';
import axios from 'axios';

import storesSchema from './schemas/stores.schema.js';

const storesModel = mongoose.model('store', storesSchema);

const LOMADEE_STORES_URL = process.env.LOMADEE_STORES_URL;
const TIME_LIMIT = 60 * 60 * 1000;

let storesList = [];

async function getUpdatedLomadeeStores() {
  const response = await axios.get(LOMADEE_STORES_URL, {
    responseType: 'json'
  });

  const { stores } = response.data;

  return stores;
}

async function saveLomadeeStores(stores) {
  const schemaKeys = Object.keys(storesSchema.paths);

  await storesModel.bulkWrite([
    ...stores.map((store) => {
      const storeKeys = Object.keys(store);

      let filters = schemaKeys.reduce((appliedFilters, currentKey) => {
        if (storeKeys.includes(currentKey)) {
          return {
            ...appliedFilters,
            [currentKey]: store[currentKey]
          };
        }

        return appliedFilters;
      }, {});

      return {
        updateOne: {
          filter: { ...filters },
          update: {},
          upsert: true
        }
      };
    })
  ]);
}

async function deleteOutdatedLomadeeStores() {
  const lomadeeStores = await storesModel.find({ source: 'Lomadee' });

  const operations = lomadeeStores
    .map((store) => {
      const timeElapsedSinceUpdate = Date.now() - new Date(store.updatedAt);

      if (timeElapsedSinceUpdate > TIME_LIMIT) {
        return {
          deleteOne: {
            filter: { name: store.name }
          }
        };
      }

      return null;
    })
    .filter(Boolean);

  await storesModel.bulkWrite([...operations]);
}

async function cacheAllStores() {
  const stores = await storesModel.find({}, { _id: 0, __v: 0 });

  storesList = stores;
}

async function updateStores() {
  const lomadeeStores = await getUpdatedLomadeeStores();

  await saveLomadeeStores(lomadeeStores);

  await deleteOutdatedLomadeeStores();

  await cacheAllStores();
}

function getStoresNumber() {
  return storesList.length;
}

async function getFeaturedStores() {
  return await storesModel.find(
    { featured: true },
    {
      _id: 0,
      __v: 0
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
