import {
  getStoresNumber,
  getPaginatedStores,
  getFeaturedStores,
  getSearchedStores
} from '../model/stores.model.js';
import StoresDTO from '../views/stores.view.js';

async function httpGetPaginatedStores(req, res) {
  let { page, limit } = req.query;

  const totalStores = getStoresNumber();
  const totalPages = Math.ceil(totalStores / limit);

  const requestState = {
    page,
    limit,
    totalPages
  };

  if (page > totalPages) {
    return res.status(400).json(new StoresDTO(requestState));
  }

  try {
    const data = getPaginatedStores(page, limit);

    requestState.data = data;

    return res.status(200).json(new StoresDTO(requestState));
  } catch (e) {
    return res.status(500).json(new StoresDTO(requestState));
  }
}

async function httpGetFeaturedStores(req, res) {
  const requestState = {
    data: null
  };

  try {
    const data = await getFeaturedStores();

    requestState.data = data;

    return res.status(200).json(new StoresDTO(requestState));
  } catch (e) {
    return res.status(500).json(new StoresDTO(requestState));
  }
}

async function httpGetSearchedStores(req, res) {
  const { searchTerm } = req.query;

  const requestState = {
    data: null
  };

  try {
    const data = await getSearchedStores(searchTerm);

    requestState.data = data;

    return res.status(200).json(new StoresDTO(requestState));
  } catch (e) {
    return res.status(500).json(new StoresDTO(requestState));
  }
}

export { httpGetPaginatedStores, httpGetFeaturedStores, httpGetSearchedStores };
