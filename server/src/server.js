import { createServer } from 'http';
import 'dotenv/config';

import app from './app.js';
import { connectDatabase } from './services/mongo.service.js';
import { updateCoupons } from './model/coupons.model.js';
import { updateStores } from './model/stores.model.js';

const PORT = process.env.PORT || 8000;

const server = createServer(app);

async function startServer() {
  await connectDatabase();

  await updateCoupons();

  await updateStores();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
