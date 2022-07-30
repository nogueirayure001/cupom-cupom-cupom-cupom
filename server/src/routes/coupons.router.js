import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories
} from '../controller/coupons.controller.js';
import paginationFormat from '../middlewares/paginationFormat.middleware.js';

const couponsRouter = Router();

couponsRouter.get('/paginated', paginationFormat, httpGetPaginatedCoupons);
couponsRouter.get('/featured', httpGetFeaturedCoupons);
couponsRouter.get('/search', httpGetSearchedCoupons);
couponsRouter.get('/categories', httpGetActiveCouponCategories);

export default couponsRouter;
