import { Request, Response, NextFunction } from 'express';

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

function httpGetPaginatedCoupons(req: Request, res: Response, next: NextFunction) {
  const { pagination } = res.locals;
  const { page, limit } = pagination;

  try {
    const coupons = getPaginatedCoupons(page, limit);

    return res.status(200).json(new CouponsDTO({ pagination, data: coupons }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetFeaturedCoupons(req: Request, res: Response, next: NextFunction) {
  try {
    const coupons = await getFeaturedCoupons();

    return res.status(200).json(new CouponsDTO({ data: coupons }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSearchedCoupons(req: Request, res: Response, next: NextFunction) {
  const { searchTerm, searchFilters } = req.query as {
    searchTerm: string, 
    searchFilters: string
  };

  try {
    const coupons = await getSearchedCoupons(searchTerm, searchFilters);

    return res.status(200).json(new CouponsDTO({ data: coupons }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetActiveCouponCategories(req: Request, res: Response, next: NextFunction) {
  try {
    const categories = await getCategories();

    return res.status(200).json(new CouponsDTO({ data: categories }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminGetCoupons(req: Request, res: Response, next: NextFunction) {
  try {
    const coupons = await adminGetCoupons();

    return res.status(200).json(new CouponsDTO({ data: coupons }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminAddCoupon(req: Request, res: Response, next: NextFunction) {
  const { couponToAdd } = req.body;

  try {
    const success = await adminAddCoupon(couponToAdd);

    if (!success) return next(new UserError(MESSAGES.invalidDataFormat));

    return res.status(201).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminDeleteCoupon(req: Request, res: Response, next: NextFunction) {
  const { couponId } = req.body;

  try {
    const success = await adminDeleteCoupon(couponId);

    if (!success) return next(new UserError(MESSAGES.invalidResourceId));

    return res.status(200).json(new CouponsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpAdminUpdateCoupon(req: Request, res: Response, next: NextFunction) {
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
