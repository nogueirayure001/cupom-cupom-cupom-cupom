import { createServer } from "http";
import "dotenv/config";

import app from "./app.js";
import { connectDatabase } from "./database.js";
import { couponsModelHandler } from "./model/coupons.model.js";

const PORT = process.env.PORT || 8000;

const server = createServer(app);

async function startServer() {
  await connectDatabase();

  await couponsModelHandler.updateCoupons();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
