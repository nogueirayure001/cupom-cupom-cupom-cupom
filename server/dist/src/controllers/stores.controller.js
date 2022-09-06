var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getStores, getPaginatedStores, adminGetStores, adminGetPaginatedStores, adminAddStore, adminDeleteStore, adminUpdateStore } from '../models/stores.model.js';
import StoresDTO from '../views/stores.view.js';
import DBError from '../errors/db-error.error.js';
import UserError from '../errors/user-error.error.js';
const { MESSAGES } = UserError;
function httpGetPaginatedStores(req, res, next) {
    const { pagination } = res.locals;
    const { page, limit } = pagination;
    try {
        const stores = getPaginatedStores(page, limit);
        const DTO = {
            pagination,
            data: stores
        };
        return res.status(200).json(new StoresDTO(DTO));
    }
    catch (e) {
        next(new DBError());
    }
}
function httpGetFeaturedStores(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filter = { featured: true };
            const stores = yield getStores(filter);
            const DTO = { data: stores };
            return res.status(200).json(new StoresDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpGetSearchedStores(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { searchTerm } = req.query;
        const searchTermRegex = new RegExp(searchTerm, 'i');
        try {
            const filter = { name: searchTermRegex };
            const stores = yield getStores(filter);
            const DTO = { data: stores };
            return res.status(200).json(new StoresDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminGetStores(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield adminGetStores();
            const DTO = { data };
            return res.status(200).json(new StoresDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminGetPaginatedStores(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { pagination } = res.locals;
        const { page, limit } = pagination;
        try {
            const stores = yield adminGetPaginatedStores(page, limit);
            const DTO = {
                pagination,
                data: stores
            };
            return res.status(200).json(new StoresDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminAddStore(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { storeToAdd } = req.body;
        try {
            const success = yield adminAddStore(storeToAdd);
            if (!success)
                return next(new UserError(MESSAGES.invalidDataFormat));
            return res.status(201).json(new StoresDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminDeleteStore(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { storeId } = req.body;
        try {
            const success = yield adminDeleteStore(storeId);
            if (!success)
                return next(new UserError(MESSAGES.invalidResourceId));
            return res.status(200).json(new StoresDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpAdminUpdateStore(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { storeId, update } = req.body;
        try {
            const success = yield adminUpdateStore(storeId, update);
            if (!success)
                return next(new UserError(MESSAGES.invalidResourceId));
            return res.status(200).json(new StoresDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
export { httpGetPaginatedStores, httpGetFeaturedStores, httpGetSearchedStores, httpAdminGetStores, httpAdminGetPaginatedStores, httpAdminAddStore, httpAdminDeleteStore, httpAdminUpdateStore };
