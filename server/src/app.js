import express, { json } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import couponsRouter from './routes/coupons.router.js';
import storesRouter from './routes/stores.router.js';
import newsletterRouter from './routes/newsletter.router.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(cors());
app.use(json());
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/coupons', couponsRouter);
app.use('/stores', storesRouter);
app.use('/newsletter', newsletterRouter);
app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'index.html'));
});

export default app;
