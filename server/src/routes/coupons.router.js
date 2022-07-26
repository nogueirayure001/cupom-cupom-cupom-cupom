import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons
} from '../controller/coupons.controller.js';
import paginationFormat from '../middlewares/paginationFormat.middleware.js';

const couponsRouter = Router();

couponsRouter.get('/paginated', paginationFormat, httpGetPaginatedCoupons);
couponsRouter.get('/featured', httpGetFeaturedCoupons);

export default couponsRouter;
