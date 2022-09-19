import { Router } from 'express';
import { httpGetPaginatedCoupons, httpGetFeaturedCoupons, httpGetSearchedCoupons, httpGetActiveCouponCategories, httpAdminGetCoupons, httpAdminGetPaginatedCoupons, httpAdminAddCoupon, httpAdminDeleteCoupon, httpAdminUpdateCoupon } from '../controllers/coupons.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';
import authentication from '../middlewares/authentication.middleware.js';
const router = Router();
// CLIENT ROUTES
router.get('/paginated', validatePagination, httpGetPaginatedCoupons);
router.get('/featured', httpGetFeaturedCoupons);
router.get('/search', httpGetSearchedCoupons);
router.get('/categories', httpGetActiveCouponCategories);
// AUTHENTICATED ROUTES
// ADMIN ROUTES
router.use(authentication);
router
    .route('/admin')
    .get(httpAdminGetCoupons)
    .post(httpAdminAddCoupon)
    .delete(httpAdminDeleteCoupon)
    .patch(httpAdminUpdateCoupon);
router
    .get('/admin/paginated', validatePagination, httpAdminGetPaginatedCoupons);
export default router;
