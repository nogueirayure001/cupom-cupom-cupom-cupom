const express = require("express");

const {
  httpGetAllCoupons,
  httpGetSearchResults,
} = require("./coupons.controller");

const allCouponsRouter = express.Router();

allCouponsRouter.get("/all", httpGetAllCoupons);

allCouponsRouter.get("/search", httpGetSearchResults);

module.exports = allCouponsRouter;
