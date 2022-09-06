import { Request, Response, NextFunction } from 'express';

import { getNumberOfStores } from '../models/stores.model.js';
import { getNumberOfCoupons } from '../models/coupons.model.js';
import UserError from '../errors/user-error.error.js';

const { MESSAGES } = UserError;

const POSSIBLE_URLS = {
  stores: '/api/stores',
  coupons: 'api/coupons'
};

function validatePagination(req: Request, res: Response, next: NextFunction) {
  let { page, limit } = req.query as unknown as {
    page: string | number,
    limit: string | number
  };

  if (!page || isNaN(Number(page)) || page < 1) {
    page = 1;
  } else {
    page = Number(page);
  }

  if (!limit || isNaN(Number(limit)) || limit < 1) {
    limit = 10;
  } else {
    limit = Number(limit);
  }

  const getItemsNumber =
    req.baseUrl === POSSIBLE_URLS['stores']
      ? getNumberOfStores
      : getNumberOfCoupons;

  const numOfItems = getItemsNumber();
  const numOfPages = Math.ceil(numOfItems / limit);

  if (page > numOfPages) return next(new UserError(MESSAGES.invalidQuery));

  res.locals = {
    ...res.locals,
    pagination: {
      page,
      limit,
      numOfPages
    }
  };

  next();
}

export default validatePagination;
