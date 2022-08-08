import { createServer } from 'http';
import 'dotenv/config';

import app from './app.js';
import { connectDatabase, updateDatabase } from './database.js';

const PORT = process.env.PORT || 8000;
const UPDATE_PERIOD = Number(process.env.UPDATE_PERIOD);

const server = createServer(app);

async function startServer() {
  await connectDatabase();

  await updateDatabase(UPDATE_PERIOD);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
