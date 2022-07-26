import { Router } from 'express';

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores
} from '../controller/stores.controller.js';
import paginationFormat from '../middlewares/paginationFormat.middleware.js';

const storesRouter = Router();

storesRouter.get('/paginated', paginationFormat, httpGetPaginatedStores);
storesRouter.get('/featured', httpGetFeaturedStores);

export default storesRouter;
