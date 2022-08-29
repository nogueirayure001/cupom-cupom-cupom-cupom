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

const storesRouter = Router();

storesRouter.get('/paginated', validatePagination, httpGetPaginatedStores);
storesRouter.get('/featured', httpGetFeaturedStores);
storesRouter.get('/search', httpGetSearchedStores);

storesRouter.use(authentication);
storesRouter.get('/admin/all', httpAdminGetStores);
storesRouter.get(
  '/admin/paginated',
  validatePagination,
  httpAdminGetPaginatedStores
);
storesRouter.post('/admin/add', httpAdminAddStore);
storesRouter.delete('/admin/delete', httpAdminDeleteStore);
storesRouter.patch('/admin/update', httpAdminUpdateStore);

export default storesRouter;
