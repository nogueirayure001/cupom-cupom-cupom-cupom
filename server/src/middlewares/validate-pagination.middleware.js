import { getStoresNumber } from '../model/stores.model.js';
import { getCouponsNumber } from '../model/coupons.model.js';
import QueryError from '../errors/query-error.error.js';

const POSSIBLE_URLS = {
  stores: '/api/stores',
  coupons: 'api/coupons'
};

function validatePagination(req, res, next) {
  let { page, limit } = req.query;

  if (!page || isNaN(page) || page < 1) {
    page = req.query.page = 1;
  } else {
    page = req.query.page = Number(page);
  }

  if (!limit || isNaN(limit) || limit < 1) {
    limit = req.query.limit = 10;
  } else {
    limit = req.query.limit = Number(limit);
  }

  const getItemsNumber =
    req.baseUrl === POSSIBLE_URLS.stores ? getStoresNumber : getCouponsNumber;

  const numOfItems = getItemsNumber();
  const numOfPages = Math.ceil(numOfItems / limit);

  if (page > numOfPages) {
    throw new QueryError();
  }

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
