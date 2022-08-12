import {
  getPaginatedCoupons,
  getFeaturedCoupons,
  getSearchedCoupons,
  getActiveCouponCategories,
  adminGetCoupons,
  adminAddCoupon,
  adminDeleteCoupons,
  adminUpdateCoupons
} from '../model/coupons.model.js';
import DBError from '../errors/db-error.error.js';
import FormError from '../errors/form-error.error.js';
import CouponsDTO from '../views/coupons.view.js';

const MESSAGES = FormError.MESSAGES;

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

    if (!success) return next(new FormError(MESSAGES.invalidDataFormat));

    return res.status(201).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminDeleteCoupons(req, res, next) {
  const { couponsToDelete } = req.body;

  try {
    const {
      result: { ok, nRemoved }
    } = await adminDeleteCoupons(couponsToDelete);

    if (!(ok && nRemoved))
      return next(new FormError(MESSAGES.invalidResourceId));

    return res.status(200).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateCoupons(req, res, next) {
  const { updatedCoupons } = req.body;

  try {
    const {
      result: { ok, nModified, nMatched }
    } = await adminUpdateCoupons(updatedCoupons);

    if (!(ok && nModified && nModified === nMatched))
      return next(new FormError(MESSAGES.invalidResourceId));

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
  httpAdminDeleteCoupons,
  httpAdminUpdateCoupons
};
