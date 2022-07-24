import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons
} from '../controller/coupons.controller.js';

const couponsRouter = Router();

couponsRouter.get('/paginated', httpGetPaginatedCoupons);
couponsRouter.get('/featured', httpGetFeaturedCoupons);

export default couponsRouter;
