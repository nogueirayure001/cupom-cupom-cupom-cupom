import {
  getCouponsNumber,
  getPaginatedCoupons,
  getFeaturedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories
} from '../model/coupons.model.js';
import DTO from '../views/DTO.view.js';

async function httpGetPaginatedCoupons(req, res) {
  let { page, limit } = req.query;

  const totalCoupons = getCouponsNumber();
  const totalPages = Math.ceil(totalCoupons / limit);

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
    const data = getPaginatedCoupons(page, limit);

    return res.status(200).json(new DTO({ ...requestState, data }));
  } catch (e) {
    return res.status(500).json(new DTO({ ...requestState, data: null }));
  }
}

async function httpGetFeaturedCoupons(req, res) {
  const requestState = {
    action: DTO.ACTIONS.featured
  };

  try {
    const data = await getFeaturedCoupons();

    return res.status(200).json(new DTO({ ...requestState, data }));
  } catch (e) {
    return res.status(500).json(new DTO({ ...requestState, data: null }));
  }
}

async function httpGetSearchedCoupons(req, res) {
  const { searchTerm } = req.query;

  const requestState = {
    action: DTO.ACTIONS.search
  };

  try {
    const data = await getSearchedCoupons(searchTerm);

    return res.status(200).json(new DTO({ ...requestState, data }));
  } catch (e) {
    return res.status(500).json(new DTO({ ...requestState, data: null }));
  }
}

async function httpGetActiveCouponCategories(req, res) {
  const categories = await getActiveCouponCategories();

  res.status(200).json(categories);
}

export {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories
};
