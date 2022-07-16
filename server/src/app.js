import express, { json } from "express";

import couponsRouter from "./routes/coupons.router.js";

const app = express();

app.use(json());

app.use("/coupons", couponsRouter);

export default app;
