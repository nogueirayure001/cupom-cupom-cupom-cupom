import mongoose from 'mongoose';

import { config } from '../config/config.js';
import { wait } from './utils/wait.utils.js';
import { updateCoupons } from './models/coupons.model.js';
import { updateStores } from './models/stores.model.js';

const MONGODB_URL = config.db.MONGODB_URL;
const BASE_TIME = config.app.BASE_TIME;

async function connectDatabase(tries = 1): Promise<void> {
  if (!MONGODB_URL) return;

  try {
    await mongoose.connect(MONGODB_URL);

    console.log('MongoDB connected');
  } catch (e) {
    console.log(
      `An error occurred while trying to connect to MongoDB. Connection will be tried again soon.`
    );

    console.error(e);

    await wait(1000 * BASE_TIME ** tries);

    return await connectDatabase(tries + 1);
  }
}

async function updateDatabase(updatePeriod: number, startingWait?: number, tries?: number) {
  if (!startingWait) startingWait = 0;
  if (!tries) tries = 1;

  try {
    await wait(startingWait);

    await updateCoupons(updatePeriod);
    await updateStores(updatePeriod);

    console.log('Database updated');
  } catch (e) {
    console.log(
      `An error occurred while trying to update database. Operation will be tried again soon.`
    );

    console.error(e);

    updateDatabase(updatePeriod, 1000 * BASE_TIME ** tries, tries + 1);

    return;
  }

  updateDatabase(updatePeriod, updatePeriod);

  return;
}

export { connectDatabase, updateDatabase };
