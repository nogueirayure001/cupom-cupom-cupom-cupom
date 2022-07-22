import mongoose from "mongoose";

import { wait } from "./utils/wait.js";

const MONGODB_URL = process.env.MONGODB_URL;
// in seconds
const BASE_TIME = 2;

async function connectDatabase(tries = 1) {
  try {
    await mongoose.connect(MONGODB_URL);

    console.log("MongoDB connected");
  } catch (e) {
    console.log(
      `An error occurred while trying to connect to MongoDB. Connection will be tried again soon.`
    );

    console.error(e);

    await wait(BASE_TIME ** tries * 1000);

    return connectDatabase(tries + 1);
  }
}

export { connectDatabase };
