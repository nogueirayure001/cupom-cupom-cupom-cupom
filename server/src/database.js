import mongoose from 'mongoose';

import { wait } from './utils/wait.utils.js';

const MONGODB_URL = process.env.MONGODB_URL;
const BASE_TIME = 2;

async function connectDatabase(tries = 1) {
  try {
    await mongoose.connect(MONGODB_URL);

    console.log('MongoDB connected');
  } catch (e) {
    console.log(
      `An error occurred while trying to connect to MongoDB. Connection will be tried again soon.`
    );

    console.error(e);

    await wait(1000 * BASE_TIME ** tries);

    return connectDatabase(tries + 1);
  }
}

export { connectDatabase };
