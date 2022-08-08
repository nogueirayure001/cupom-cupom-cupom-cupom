import {
  getPaginatedCoupons,
  getFeaturedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories
} from '../model/coupons.model.js';
import DBError from '../errors/db-error.error.js';
import CouponsDTO from '../views/coupons.view.js';

function httpGetPaginatedCoupons(req, res) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const data = getPaginatedCoupons(page, limit);

    return res.status(200).json(new CouponsDTO({ pagination, data }));
  } catch (e) {
    throw new DBError();
  }
}

async function httpGetFeaturedCoupons(req, res) {
  try {
    const data = await getFeaturedCoupons();

    return res.status(200).json(new CouponsDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSearchedCoupons(req, res) {
  const { searchTerm, searchFilters } = req.query;

  try {
    const data = await getSearchedCoupons(searchTerm, searchFilters);

    return res.status(200).json(new CouponsDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetActiveCouponCategories(req, res) {
  try {
    const data = await getActiveCouponCategories();

    return res.status(200).json(new CouponsDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories
};
