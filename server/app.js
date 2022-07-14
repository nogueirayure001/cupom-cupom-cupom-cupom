const express = require("express");

const allCouponsRouter = require("./src/routes/coupons/coupons.router");

const app = express();

app.use(express.json());

app.use("/coupons", allCouponsRouter);

module.exports = app;
