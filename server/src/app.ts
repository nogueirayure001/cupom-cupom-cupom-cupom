import express, { json } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import couponsRouter from './routes/coupons.router.js';
import storesRouter from './routes/stores.router.js';
import newsletterRouter from './routes/newsletter.router.js';
import usersRouter from './routes/users.router.js';
import authRouter from './routes/auth.router.js';
import errorHandler from './middlewares/error-handler.middleware.js';
import authentication from './middlewares/authentication.middleware.js';


const __dirname = dirname(fileURLToPath(import.meta.url));
const clientPath = join(__dirname, '..', 'public', 'client');
const adminPath = join(__dirname, '..', 'public', 'admin');

const app = express();

// PRE-ROUTES MIDDLEWARE
app.use(cors());
app.use(json());
app.use(fileUpload({ limits: { fieldSize: 2 * 1024 * 1024 } }));
app.use(express.static(clientPath));
app.use(express.static(adminPath));

// ROUTES
app.use('/api/coupons', couponsRouter);
app.use('/api/stores', storesRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/users', authentication, usersRouter);
app.use('/auth', authRouter);

// POST-ROUTES MIDDLEWARE
app.use(errorHandler);

// STATIC FILES
app.get('/admin*', (req, res) => {
  res.sendFile(join(adminPath, 'index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(join(clientPath, 'index.html'));
});

export default app;
