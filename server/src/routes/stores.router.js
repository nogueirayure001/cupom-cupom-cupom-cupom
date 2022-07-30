import { Router } from 'express';

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
  httpGetSearchedStores
} from '../controllers/stores.controller.js';
import paginationFormat from '../middlewares/paginationFormat.middleware.js';

const storesRouter = Router();

storesRouter.get('/paginated', paginationFormat, httpGetPaginatedStores);
storesRouter.get('/featured', httpGetFeaturedStores);
storesRouter.get('/search', httpGetSearchedStores);

export default storesRouter;
