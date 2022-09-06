var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import mongoose from 'mongoose';
import { config } from '../../config/config.js';
import Cache from '../utils/cache.utils.js';
import couponsSchema from '../schemas/coupons.schema.js';
const couponsModel = mongoose.model('coupon', couponsSchema);
const LOMADEE_COUPONS_URL = config.dataSource.LOMADEE_COUPONS_URL;
const COUPON_VALID_KEYS = [
    'category',
    'code',
    'description',
    'link',
    'store',
    'featured',
    'source'
];
const cache = new Cache();
function getUpdatedLomadeeCoupons() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield axios.get(LOMADEE_COUPONS_URL, {
            responseType: 'json'
        });
        const { coupons } = response.data;
        const sanitizedCoupons = coupons.map((coupon) => {
            const transformedCoupon = {};
            const couponKeys = Object.keys(coupon);
            couponKeys.forEach((key) => {
                if (COUPON_VALID_KEYS.includes(key)) {
                    if (coupon[key].hasOwnProperty('name')) {
                        transformedCoupon[key] = coupon[key]['name'];
                        if (coupon[key].hasOwnProperty('image')) {
                            transformedCoupon['image'] = coupon[key]['image'];
                        }
                        return;
                    }
                    transformedCoupon[key] = coupon[key];
                }
            });
            return transformedCoupon;
        });
        return sanitizedCoupons;
    });
}
function saveLomadeeCoupons(coupons) {
    return __awaiter(this, void 0, void 0, function* () {
        const writes = coupons.map((coupon) => ({
            updateOne: {
                filter: coupon,
                update: {},
                upsert: true
            }
        }));
        yield couponsModel.bulkWrite(writes);
    });
}
function deleteOutdatedLomadeeCoupons(updatePeriod) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { source: 'Lomadee' };
        const lomadeeCoupons = yield couponsModel.find(filter);
        const filters = lomadeeCoupons
            .map((coupon) => {
            const lastUpdate = (new Date(coupon.updatedAt)).getTime();
            const timeElapsedSinceUpdate = Date.now() - lastUpdate;
            if (timeElapsedSinceUpdate > updatePeriod) {
                return { _id: coupon._id };
            }
            return null;
        })
            .filter(Boolean);
        if (!filters || !filters.length)
            return;
        const conditions = { $or: filters };
        yield couponsModel.deleteMany(conditions);
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
        const coupons = yield couponsModel.find(filter, projection);
        cache.clear();
        cache.set('all', coupons);
    });
}
function updateCoupons(updatePeriod) {
    return __awaiter(this, void 0, void 0, function* () {
        const lomadeeCoupons = yield getUpdatedLomadeeCoupons();
        yield saveLomadeeCoupons(lomadeeCoupons);
        yield deleteOutdatedLomadeeCoupons(updatePeriod);
        yield refreshCaching();
    });
}
function getNumberOfCoupons() {
    const coupons = cache.get('all');
    if (!Array.isArray(coupons))
        return 0;
    return coupons.length;
}
function getFeaturedCoupons() {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { featured: true };
        const projection = {
            _id: 0,
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        if (cache.has('featured'))
            return cache.get('featured');
        const coupons = yield couponsModel.find(filter, projection);
        cache.set('featured', coupons);
        return coupons;
    });
}
function getPaginatedCoupons(page, limit) {
    const key = { page, limit };
    if (cache.has(key))
        return cache.get(key);
    const coupons = cache.get('all');
    if (!Array.isArray(coupons))
        throw new Error();
    const start = (page - 1) * limit;
    const end = page * limit;
    const couponsPage = coupons
        .filter((_, index) => index >= start && index < end);
    cache.set(key, couponsPage);
    return couponsPage;
}
function getSearchedCoupons(searchTerm, searchFilters = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const key = { searchTerm, searchFilters };
        if (cache.has(key))
            return cache.get(key);
        const searchTermRegex = new RegExp(searchTerm, 'i');
        const FILTER_VALUES = {
            store: { store: searchTermRegex },
            category: { category: searchTermRegex },
            keyword: { description: searchTermRegex }
        };
        const FILTER_KEYS = Object.keys(FILTER_VALUES);
        const appliedFilters = searchFilters
            .toLowerCase()
            .split(',')
            .filter((filter) => FILTER_KEYS.includes(filter))
            .map((filter) => FILTER_VALUES[filter]);
        const filter = {
            $or: appliedFilters.length ? appliedFilters : Object.values(FILTER_VALUES)
        };
        const projection = {
            _id: 0,
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        const searchResults = yield couponsModel.find(filter, projection);
        cache.set(key, searchResults);
        return searchResults;
    });
}
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cache.has('categories'))
            return cache.get('categories');
        const field = 'category';
        const filter = {};
        const categories = yield couponsModel.distinct(field, filter);
        cache.set('categories', categories);
        return categories;
    });
}
function adminGetCoupons() {
    return __awaiter(this, void 0, void 0, function* () {
        if (cache.has('adminAll'))
            return cache.get('adminAll');
        const filter = {};
        const projection = {
            __v: 0,
            createdAt: 0,
            updatedAt: 0
        };
        const coupons = yield couponsModel.find(filter, projection);
        cache.set('adminAll', coupons);
        return coupons;
    });
}
function adminGetPaginatedCoupons(page, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const key = { level: 'admin', page, limit };
        if (cache.has(key))
            return cache.get(key);
        const coupons = cache.has('adminAll')
            ? cache.get('adminAll')
            : yield adminGetCoupons();
        if (!coupons || !Array.isArray(coupons))
            throw new Error();
        const start = (page - 1) * limit;
        const end = page * limit;
        const couponsPage = coupons.filter((_, index) => index >= start && index < end);
        cache.set(key, couponsPage);
        return couponsPage;
    });
}
function adminAddCoupon(coupon) {
    return __awaiter(this, void 0, void 0, function* () {
        const newCoupon = new couponsModel(coupon);
        try {
            yield newCoupon.save();
            refreshCaching();
            return true;
        }
        catch (e) {
            if (e._message === 'coupon validation failed') {
                return false;
            }
            throw new Error();
        }
    });
}
function adminDeleteCoupon(couponId) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { _id: couponId };
        const validId = mongoose.Types.ObjectId.isValid(couponId);
        if (!validId)
            return false;
        const { acknowledged, deletedCount } = yield couponsModel.deleteOne(filter);
        if (!acknowledged)
            throw new Error();
        if (deletedCount)
            refreshCaching();
        return Boolean(deletedCount) && true;
    });
}
function adminUpdateCoupon(couponId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { _id: couponId };
        const validId = mongoose.Types.ObjectId.isValid(couponId);
        if (!validId)
            return false;
        const { acknowledged, modifiedCount, matchedCount } = yield couponsModel.updateOne(filter, update);
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
export { updateCoupons, getNumberOfCoupons, getFeaturedCoupons, getPaginatedCoupons, getSearchedCoupons, getCategories, adminGetCoupons, adminGetPaginatedCoupons, adminAddCoupon, adminDeleteCoupon, adminUpdateCoupon };
