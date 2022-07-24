import express, { json } from 'express';

import couponsRouter from './routes/coupons.router.js';
import storesRouter from './routes/stores.router.js';

const app = express();

app.use(json());

app.use('/coupons', couponsRouter);
app.use('/stores', storesRouter);

export default app;
