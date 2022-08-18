import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories,
  httpAdminGetCoupons,
  httpAdminAddCoupon,
  httpAdminDeleteCoupons,
  httpAdminUpdateCoupons
} from '../controllers/coupons.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';
import authentication from '../middlewares/authentication.middleware.js';

const couponsRouter = Router();

couponsRouter.get('/paginated', validatePagination, httpGetPaginatedCoupons);
couponsRouter.get('/featured', httpGetFeaturedCoupons);
couponsRouter.get('/search', httpGetSearchedCoupons);
couponsRouter.get('/categories', httpGetActiveCouponCategories);

couponsRouter.use(authentication);
couponsRouter.get('/admin/all', httpAdminGetCoupons);
couponsRouter.post('/admin/add', httpAdminAddCoupon);
couponsRouter.delete('/admin/delete', httpAdminDeleteCoupons);
couponsRouter.patch('/admin/update', httpAdminUpdateCoupons);

export default couponsRouter;
