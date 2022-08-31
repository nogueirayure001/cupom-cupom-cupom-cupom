import { Router } from 'express';

import {
  httpGetPaginatedCoupons,
  httpGetFeaturedCoupons,
  httpGetSearchedCoupons,
  httpGetActiveCouponCategories,
  httpAdminGetCoupons,
  httpAdminGetPaginatedCoupons,
  httpAdminAddCoupon,
  httpAdminDeleteCoupon,
  httpAdminUpdateCoupon
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
couponsRouter.get(
  '/admin/paginated', 
  validatePagination, 
  httpAdminGetPaginatedCoupons
);
couponsRouter.post('/admin/add', httpAdminAddCoupon);
couponsRouter.delete('/admin/delete', httpAdminDeleteCoupon);
couponsRouter.patch('/admin/update', httpAdminUpdateCoupon);

export default couponsRouter;
