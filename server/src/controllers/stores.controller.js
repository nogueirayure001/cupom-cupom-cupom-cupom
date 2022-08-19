import {
  getStores,
  getPaginatedStores,
  adminGetStores,
  adminGetPaginatedStores,
  adminAddStore,
  adminDeleteStore,
  adminUpdateStore
} from '../model/stores.model.js';
import StoresDTO from '../views/stores.view.js';
import DBError from '../errors/db-error.error.js';
import UserError from '../errors/user-error.error.js';

const { MESSAGES } = UserError;

function httpGetPaginatedStores(req, res) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const stores = getPaginatedStores(page, limit);

    const DTO = {
      pagination,
      data: stores
    };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    throw new DBError();
  }
}

async function httpGetFeaturedStores(req, res, next) {
  try {
    const filter = { featured: true };
    const stores = await getStores(filter);

    const DTO = { data: stores };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSearchedStores(req, res) {
  const { searchTerm } = req.query;

  const searchTermRegex = new RegExp(searchTerm, 'i');

  try {
    const filter = { name: searchTermRegex };
    const stores = await getStores(filter);

    const DTO = { data: stores };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetStores(req, res) {
  try {
    const data = await adminGetStores();

    const DTO = { data };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    throw new DBError();
  }
}

async function httpAdminGetPaginatedStores(req, res) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const stores = await adminGetPaginatedStores(page, limit);

    const DTO = {
      pagination,
      data: stores
    };

    return res.status(200).json(new StoresDTO(DTO));
  } catch (e) {
    throw new DBError();
  }
}

async function httpAdminAddStore(req, res, next) {
  const { storeToAdd } = req.body;

  try {
    const success = await adminAddStore(storeToAdd);

    if (!success) return next(new UserError(MESSAGES.invalidDataFormat));

    return res.status(201).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminDeleteStore(req, res, next) {
  const { storeId } = req.body;

  try {
    const success = await adminDeleteStore(storeId);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateStore(req, res, next) {
  const { storeId, update } = req.body;

  try {
    const success = await adminUpdateStore(storeId, update);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores,
  httpAdminGetStores,
  httpAdminGetPaginatedStores,
  httpAdminAddStore,
  httpAdminDeleteStore,
  httpAdminUpdateStore
};
