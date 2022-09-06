var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import axios from 'axios';
import { config } from '../../config/config.js';
import Cache from '../utils/cache.utils.js';
import storesSchema from '../schemas/stores.schema.js';
const storesModel = mongoose.model('store', storesSchema);
const LOMADEE_STORES_URL = config.dataSource.LOMADEE_STORES_URL;
const STORE_VALID_KEYS = ['name', 'image'];
const cache = new Cache();
function getUpdatedLomadeeStores() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.get(LOMADEE_STORES_URL, {
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
    });
}
function saveLomadeeStores(stores) {
    return __awaiter(this, void 0, void 0, function* () {
        const writes = stores.map((store) => ({
            updateOne: {
                filter: store,
                update: {},
                upsert: true
            }
        }));
        yield storesModel.bulkWrite(writes);
    });
}
function deleteOutdatedLomadeeStores(updatePeriod) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { source: 'Lomadee' };
        const lomadeeStores = yield storesModel.find(filter);
        const filters = lomadeeStores
            .map((store) => {
            const lastUpdate = (new Date(store.updatedAt)).getTime();
            const timeSinceUpdate = Date.now() - lastUpdate;
            if (timeSinceUpdate > updatePeriod) {
                return { _id: store._id };
            }
            return null;
        })
            .filter(Boolean);
        if (!filters || !filters.length)
            return;
        const conditions = { $or: filters };
        return yield storesModel.deleteMany(conditions);
    });
}
function refreshCaching() {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = {};
        const projection = {
            _id: 0,
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        const stores = yield storesModel.find(filter, projection);
        cache.clear();
        cache.set('all', stores);
    });
}
function updateStores(updatePeriod) {
    return __awaiter(this, void 0, void 0, function* () {
        const lomadeeStores = yield getUpdatedLomadeeStores();
        yield saveLomadeeStores(lomadeeStores);
        yield deleteOutdatedLomadeeStores(updatePeriod);
        yield refreshCaching();
    });
}
function getNumberOfStores() {
    const stores = cache.get('all');
    if (!Array.isArray(stores))
        return 0;
    return stores.length;
}
function getStores(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = filter;
        if (cache.has(key))
            return cache.get(key);
        const projection = {
            _id: 0,
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        const stores = yield storesModel.find(filter, projection);
        cache.set(key, stores);
        return stores;
    });
}
function getPaginatedStores(page, limit) {
    const key = { page, limit };
    if (cache.has(key))
        return cache.get(key);
    const stores = cache.get('all');
    if (!Array.isArray(stores))
        throw new Error();
    const start = (page - 1) * limit;
    const end = page * limit;
    const storesPage = stores
        .filter((_, index) => index >= start && index < end);
    cache.set(key, storesPage);
    return storesPage;
}
function adminGetStores() {
    return __awaiter(this, void 0, void 0, function* () {
        const key = 'adminAll';
        if (cache.has(key))
            return cache.get(key);
        const filter = {};
        const projection = {
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        const stores = yield storesModel.find(filter, projection);
        cache.set(key, stores);
        return stores;
    });
}
function adminGetPaginatedStores(page, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = { level: 'admin', page, limit };
        if (cache.has(key))
            return cache.get(key);
        const stores = cache.has('adminAll')
            ? cache.get('adminAll')
            : yield adminGetStores();
        if (!stores || !Array.isArray(stores))
            throw new Error();
        const start = (page - 1) * limit;
        const end = page * limit;
        const storesPage = stores.filter((_, index) => index >= start && index < end);
        cache.set(key, storesPage);
        return storesPage;
    });
}
function adminAddStore(store) {
    return __awaiter(this, void 0, void 0, function* () {
        const newStore = new storesModel(store);
        try {
            yield newStore.save();
            refreshCaching();
            return true;
        }
        catch (e) {
            if (e._message === 'store validation failed') {
                return false;
            }
            throw new Error();
        }
    });
}
function adminDeleteStore(storeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { _id: storeId };
        const validId = mongoose.Types.ObjectId.isValid(storeId);
        if (!validId)
            return false;
        const { acknowledged, deletedCount } = yield storesModel.deleteOne(filter);
        if (!acknowledged)
            throw new Error();
        if (deletedCount)
            refreshCaching();
        return deletedCount && true;
    });
}
function adminUpdateStore(storeId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { _id: storeId };
        const validId = mongoose.Types.ObjectId.isValid(storeId);
        if (!validId)
            return false;
        const { acknowledged, modifiedCount, matchedCount } = yield storesModel.updateOne(filter, update);
        if (!acknowledged)
            throw new Error();
        if (!matchedCount)
            return false;
        if (!modifiedCount)
            throw new Error();
        refreshCaching();
        return true;
    });
}
export { updateStores, getNumberOfStores, getStores, getPaginatedStores, adminGetStores, adminGetPaginatedStores, adminAddStore, adminDeleteStore, adminUpdateStore };
