import { Router } from 'express';

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores,
  httpAdminGetStores,
  httpAdminAddStore,
  httpAdminDeleteStores,
  httpAdminUpdateStores
} from '../controllers/stores.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';

const storesRouter = Router();

storesRouter.get('/paginated', validatePagination, httpGetPaginatedStores);
storesRouter.get('/featured', httpGetFeaturedStores);
storesRouter.get('/search', httpGetSearchedStores);
storesRouter.get('/admin/all', httpAdminGetStores);
storesRouter.post('/admin/add', httpAdminAddStore);
storesRouter.delete('/admin/delete', httpAdminDeleteStores);
storesRouter.patch('/admin/update', httpAdminUpdateStores);

export default storesRouter;
