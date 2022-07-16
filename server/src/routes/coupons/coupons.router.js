import { Router } from "express";

import { httpGetPaginatedCoupons } from "./coupons.controller.js";

const couponsRouter = Router();

couponsRouter.get("/paginated", httpGetPaginatedCoupons);

export default couponsRouter;
