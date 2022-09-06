var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPaginatedCoupons, getFeaturedCoupons, getSearchedCoupons, getCategories, adminGetCoupons, adminGetPaginatedCoupons, adminAddCoupon, adminDeleteCoupon, adminUpdateCoupon } from '../models/coupons.model.js';
import DBError from '../errors/db-error.error.js';
import UserError from '../errors/user-error.error.js';
import CouponsDTO from '../views/coupons.view.js';
const MESSAGES = UserError.MESSAGES;
function httpGetPaginatedCoupons(req, res, next) {
    const { pagination } = res.locals;
    const { page, limit } = pagination;
    try {
        const coupons = getPaginatedCoupons(page, limit);
        return res.status(200).json(new CouponsDTO({ pagination, data: coupons }));
    }
    catch (e) {
        next(new DBError());
    }
}
function httpGetFeaturedCoupons(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const coupons = yield getFeaturedCoupons();
            return res.status(200).json(new CouponsDTO({ data: coupons }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpGetSearchedCoupons(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { searchTerm, searchFilters } = req.query;
        try {
            const coupons = yield getSearchedCoupons(searchTerm, searchFilters);
            return res.status(200).json(new CouponsDTO({ data: coupons }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpGetActiveCouponCategories(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = yield getCategories();
            return res.status(200).json(new CouponsDTO({ data: categories }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminGetCoupons(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const coupons = yield adminGetCoupons();
            return res.status(200).json(new CouponsDTO({ data: coupons }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminGetPaginatedCoupons(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { pagination } = res.locals;
        const { page, limit } = pagination;
        try {
            const coupons = yield adminGetPaginatedCoupons(page, limit);
            const DTO = {
                pagination,
                data: coupons
            };
            return res.status(200).json(new CouponsDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminAddCoupon(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { couponToAdd } = req.body;
        try {
            const success = yield adminAddCoupon(couponToAdd);
            if (!success)
                return next(new UserError(MESSAGES.invalidDataFormat));
            return res.status(201).json(new CouponsDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminDeleteCoupon(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { couponId } = req.body;
        try {
            const success = yield adminDeleteCoupon(couponId);
            if (!success)
                return next(new UserError(MESSAGES.invalidResourceId));
            return res.status(200).json(new CouponsDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminUpdateCoupon(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { couponId, update } = req.body;
        try {
            const success = yield adminUpdateCoupon(couponId, update);
            if (!success)
                return next(new UserError(MESSAGES.invalidResourceId));
            return res.status(200).json(new CouponsDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
export { httpGetPaginatedCoupons, httpGetFeaturedCoupons, httpGetSearchedCoupons, httpGetActiveCouponCategories, httpAdminGetCoupons, httpAdminGetPaginatedCoupons, httpAdminAddCoupon, httpAdminDeleteCoupon, httpAdminUpdateCoupon };
