import {
  getPaginatedStores,
  getFeaturedStores,
  getSearchedStores,
  adminGetStores,
  adminAddStore,
  adminDeleteStores,
  adminUpdateStores
} from '../model/stores.model.js';
import StoresDTO from '../views/stores.view.js';
import DBError from '../errors/db-error.error.js';

function httpGetPaginatedStores(req, res) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const data = getPaginatedStores(page, limit);

    return res.status(200).json(new StoresDTO({ pagination, data }));
  } catch (e) {
    throw new DBError();
  }
}

async function httpGetFeaturedStores(req, res, next) {
  try {
    const data = await getFeaturedStores();

    return res.status(200).json(new StoresDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSearchedStores(req, res) {
  const { searchTerm } = req.query;

  try {
    const data = await getSearchedStores(searchTerm);

    return res.status(200).json(new StoresDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetStores(req, res) {
  try {
    const data = await adminGetStores();

    return res.status(200).json(new StoresDTO({ data }));
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

async function httpAdminDeleteStores(req, res, next) {
  const { storesToDelete } = req.body;

  try {
    const {
      result: { ok, nRemoved }
    } = await adminDeleteStores(storesToDelete);

    if (!(ok && nRemoved))
      return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new StoresDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateStores(req, res, next) {
  const { updatedStores } = req.body;

  try {
    const {
      result: { ok, nModified, nMatched }
    } = await adminUpdateStores(updatedStores);

    if (!(ok && nModified && nModified === nMatched))
      return next(new UserError(MESSAGES.invalidResourceId));

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
  httpAdminAddStore,
  httpAdminDeleteStores,
  httpAdminUpdateStores
};
