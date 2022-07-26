import {
  getStoresNumber,
  getPaginatedStores,
  getFeaturedStores
} from '../model/stores.model.js';
import DTO from '../views/DTO.view.js';

async function httpGetPaginatedStores(req, res) {
  let { page, limit } = req.query;

  const totalStores = getStoresNumber();
  const totalPages = Math.ceil(totalStores / limit);

  const requestState = {
    page,
    limit,
    totalPages,
    action: DTO.ACTIONS.paginated
  };

  if (page > totalPages) {
    return res.status(400).json(new DTO(requestState));
  }

  try {
    const data = getPaginatedStores(page, limit);

    return res.status(200).json(new DTO({ ...requestState, data }));
  } catch (e) {
    return res.status(500).json(new DTO({ ...requestState, data: null }));
  }
}

async function httpGetFeaturedStores(req, res) {
  const requestState = {
    action: DTO.ACTIONS.featured
  };

  try {
    const data = await getFeaturedStores();

    return res.status(200).json(new DTO({ ...requestState, data }));
  } catch (e) {
    return res.status(500).json(new DTO({ ...requestState, data: null }));
  }
}

export { httpGetPaginatedStores, httpGetFeaturedStores };
