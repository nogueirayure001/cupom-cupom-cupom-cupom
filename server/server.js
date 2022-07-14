const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");
const { loadCoupons } = require("./src/model/coupons.model");

const PORT = process.env.PORT || 8000;
const MONGOOSE_URL = `mongodb+srv://cupomcupomcupom:${process.env.MONGODB_PWD}@3cupom.s4wbc.mongodb.net/?retryWrites=true&w=majority`;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

async function startServer() {
  await mongoose.connect(MONGOOSE_URL);

  await loadCoupons().then(() => {
    console.log("Updated coupons loaded");
  });

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
