import { Router } from 'express';

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores
} from '../controllers/stores.controller.js';
import validatePagination from '../middlewares/validate-pagination.middleware.js';

const storesRouter = Router();

storesRouter.get('/paginated', validatePagination, httpGetPaginatedStores);
storesRouter.get('/featured', httpGetFeaturedStores);
storesRouter.get('/search', httpGetSearchedStores);

export default storesRouter;
