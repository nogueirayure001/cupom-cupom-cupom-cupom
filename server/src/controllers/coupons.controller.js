import {
  getCouponsNumber,
  getPaginatedCoupons,
  getFeaturedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories
} from '../model/coupons.model.js';
import CouponsDTO from '../views/coupons.view.js';

async function httpGetPaginatedCoupons(req, res) {
  let { page, limit } = req.query;

  const totalCoupons = getCouponsNumber();
  const totalPages = Math.ceil(totalCoupons / limit);

  const requestState = {
    page,
    limit,
    totalPages,
    data: null
  };

  if (page > totalPages) {
    return res.status(400).json(new CouponsDTO(requestState));
  }

  try {
    const data = getPaginatedCoupons(page, limit);

    requestState.data = data;

    return res.status(200).json(new CouponsDTO(requestState));
  } catch (e) {
    return res.status(500).json(new CouponsDTO(requestState));
  }
}

async function httpGetFeaturedCoupons(req, res) {
  const requestState = {
    data: null
  };

  try {
    const data = await getFeaturedCoupons();

    requestState.data = data;

    return res.status(200).json(new CouponsDTO(requestState));
  } catch (e) {
    return res.status(500).json(new CouponsDTO(requestState));
  }
}

async function httpGetSearchedCoupons(req, res) {
  const { searchTerm, searchFilters } = req.query;

  const requestState = {
    data: null
  };

  try {
    const data = await getSearchedCoupons(searchTerm, searchFilters);

    requestState.data = data;

    return res.status(200).json(new CouponsDTO(requestState));
  } catch (e) {
    return res.status(500).json(new CouponsDTO(requestState));
  }
}

async function httpGetActiveCouponCategories(req, res) {
  const requestState = {
    data: null
  };

  try {
    const data = await getActiveCouponCategories();

    requestState.data = data;

    return res.status(200).json(new CouponsDTO(requestState));
  } catch (e) {
    return res.status(500).json(new CouponsDTO(requestState));
  }
}

export {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories
};
