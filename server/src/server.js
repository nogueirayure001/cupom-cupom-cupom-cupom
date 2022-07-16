import { createServer } from "http";
import mongoose from "mongoose";
import {} from "dotenv/config";

import app from "./app.js";
import { couponsModelHandler } from "./model/coupons.model.js";

const PORT = process.env.PORT || 8000;

const server = createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

async function startServer() {
  await mongoose.connect(process.env.MONGODB_URL);

  await couponsModelHandler.updateCoupons();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
