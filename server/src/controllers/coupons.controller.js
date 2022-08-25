import {
  getPaginatedCoupons,
  getFeaturedCoupons,
  getSearchedCoupons,
  getCategories,
  adminGetCoupons,
  adminAddCoupon,
  adminDeleteCoupon,
  adminUpdateCoupon
} from '../models/coupons.model.js';
import DBError from '../errors/db-error.error.js';
import UserError from '../errors/user-error.error.js';
import CouponsDTO from '../views/coupons.view.js';

const MESSAGES = UserError.MESSAGES;

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
    const data = await getCategories();

    return res.status(200).json(new CouponsDTO({ data }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetCoupons(req, res, next) {
  try {
    const coupons = await adminGetCoupons();

    return res.status(200).json(new CouponsDTO({ data: coupons }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminAddCoupon(req, res, next) {
  const { couponToAdd } = req.body;

  try {
    const success = await adminAddCoupon(couponToAdd);

    if (!success) return next(new UserError(MESSAGES.invalidDataFormat));

    return res.status(201).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminDeleteCoupon(req, res, next) {
  const { couponId } = req.body;

  try {
    const success = await adminDeleteCoupon(couponId);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateCoupon(req, res, next) {
  const { couponId, update } = req.body;

  try {
    const success = await adminUpdateCoupon(couponId, update);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories,
  httpAdminGetCoupons,
  httpAdminAddCoupon,
  httpAdminDeleteCoupon,
  httpAdminUpdateCoupon
};
