var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createServer } from 'http';
import { config } from '../config/config.js';
import app from './app.js';
import { connectDatabase, updateDatabase } from './database.js';
const PORT = config.app.PORT;
const UPDATE_PERIOD = config.app.UPDATE_PERIOD;
const server = createServer(app);
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDatabase();
        yield updateDatabase(UPDATE_PERIOD);
        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
        });
    });
}
startServer();
