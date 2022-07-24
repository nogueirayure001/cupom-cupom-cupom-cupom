import {
  getCouponsNumber,
  getPaginatedCoupons,
  getFeaturedCoupons,
} from '../model/coupons.model.js';
import { couponsViewHandler } from '../views/coupons.view.js';

async function httpGetPaginatedCoupons(req, res) {
  let { page = 1, limit = 10 } = req.query;

  page = Number(page);
  limit = Number(limit);

  const totalCoupons = getCouponsNumber();
  const totalPages = Math.ceil(totalCoupons / limit);

  const requestState = {
    page,
    limit,
    totalPages,
  };

  if (page > totalPages || page < 1 || limit < 1) {
    const DTO = couponsViewHandler.getPaginatedDTO(requestState, null);
    return res.status(404).json(DTO);
  }

  const responseData = getPaginatedCoupons(page, limit);

  const DTO = couponsViewHandler.getPaginatedDTO(requestState, responseData);

  return res.status(200).json(DTO);
}

async function httpGetFeaturedCoupons(req, res) {
  const responseData = await getFeaturedCoupons();

  if (!responseData) {
    const DTO = couponsViewHandler.getFeaturedDTO(responseData);

    return res.status(404).json(DTO);
  }

  const DTO = couponsViewHandler.getFeaturedDTO(responseData);

  return res.status(200).json(DTO);
}

export { httpGetPaginatedCoupons, httpGetFeaturedCoupons };
