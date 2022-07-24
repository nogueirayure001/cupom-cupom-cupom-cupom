import {
  getStoresNumber,
  getPaginatedStores,
  getFeaturedStores,
} from "../model/stores.model.js";
import { storesViewHandler } from "../views/stores.view.js";

async function httpGetPaginatedStores(req, res) {
  let { page = 1, limit = 10 } = req.query;

  page = Number(page);
  limit = Number(limit);

  const totalStores = getStoresNumber();
  const totalPages = Math.ceil(totalStores / limit);

  const requestState = {
    page,
    limit,
    totalPages,
  };

  if (page > totalPages || page < 1 || limit < 1) {
    const DTO = storesViewHandler.getPaginatedDTO(requestState, null);
    return res.status(404).json(DTO);
  }

  const responseData = getPaginatedStores(page, limit);

  const DTO = storesViewHandler.getPaginatedDTO(requestState, responseData);

  return res.status(200).json(DTO);
}

async function httpGetFeaturedStores(req, res) {
  const responseData = await getFeaturedStores();

  if (!responseData) {
    const DTO = storesViewHandler.getFeaturedDTO(responseData);

    return res.status(404).json(DTO);
  }

  const DTO = storesViewHandler.getFeaturedDTO(responseData);

  return res.status(200).json(DTO);
}

export { httpGetPaginatedStores, httpGetFeaturedStores };
