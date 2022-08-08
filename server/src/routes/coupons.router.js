import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories
} from '../controllers/coupons.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';

const couponsRouter = Router();

couponsRouter.get('/paginated', validatePagination, httpGetPaginatedCoupons);
couponsRouter.get('/featured', httpGetFeaturedCoupons);
couponsRouter.get('/search', httpGetSearchedCoupons);
couponsRouter.get('/categories', httpGetActiveCouponCategories);

export default couponsRouter;
