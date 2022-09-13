import { Router } from 'express';

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores,
  httpAdminGetStores,
  httpAdminGetPaginatedStores,
  httpAdminAddStore,
  httpAdminDeleteStore,
  httpAdminUpdateStore
} from '../controllers/stores.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';
import authentication from '../middlewares/authentication.middleware.js';

const router = Router();

// CLIENT ROUTES
router.get('/paginated', validatePagination, httpGetPaginatedStores);
router.get('/featured', httpGetFeaturedStores);
router.get('/search', httpGetSearchedStores);

// AUTHENTICATED ROUTES
// ADMIN ROUTES
router.use(authentication);

router
  .route('/admin')
  .get(httpAdminGetStores)
  .post(httpAdminAddStore)
  .delete(httpAdminDeleteStore)
  .patch(httpAdminUpdateStore);

router
  .get('/admin/paginated', validatePagination, httpAdminGetPaginatedStores);

export default router;
