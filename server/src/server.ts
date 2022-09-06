import { createServer } from 'http';

import { config } from '../config/config.js';
import app from './app.js';
import { connectDatabase, updateDatabase } from './database.js';

const PORT = config.app.PORT;
const UPDATE_PERIOD = config.app.UPDATE_PERIOD;

const server = createServer(app);

async function startServer() {
  await connectDatabase();

  await updateDatabase(UPDATE_PERIOD);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
