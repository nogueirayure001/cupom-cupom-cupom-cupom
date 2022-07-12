const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 8000;
const MONGOOSE_URL = `mongodb+srv://3xcupommanager:${process.env.MONGODB_PSW}@3xcupom.5b9be.mongodb.net/?retryWrites=true&w=majority`;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

async function startServer() {
  await mongoose.connect(MONGOOSE_URL);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
