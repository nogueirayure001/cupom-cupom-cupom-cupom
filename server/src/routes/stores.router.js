import { Router } from "express";

import {
  httpGetPaginatedStores,
  httpGetFeaturedStores,
} from "../controller/stores.controller.js";

const storesRouter = Router();

storesRouter.get("/paginated", httpGetPaginatedStores);
storesRouter.get("/featured", httpGetFeaturedStores);

export default storesRouter;
