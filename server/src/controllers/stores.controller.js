import {
  getPaginatedStores,
  getFeaturedStores,
  getSearchedStores
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

export { httpGetPaginatedStores, httpGetFeaturedStores, httpGetSearchedStores };
