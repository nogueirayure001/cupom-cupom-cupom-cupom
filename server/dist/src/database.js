var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from 'mongoose';
import { config } from '../config/config.js';
import { wait } from './utils/wait.utils.js';
import { updateCoupons } from './models/coupons.model.js';
import { updateStores } from './models/stores.model.js';
const MONGODB_URL = config.db.MONGODB_URL;
const BASE_TIME = config.app.BASE_TIME;
function connectDatabase(tries = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!MONGODB_URL)
            return;
        try {
            yield mongoose.connect(MONGODB_URL);
            console.log('MongoDB connected');
        }
        catch (e) {
            console.log(`An error occurred while trying to connect to MongoDB. Connection will be tried again soon.`);
            console.error(e);
            yield wait(1000 * BASE_TIME ** tries);
            return yield connectDatabase(tries + 1);
        }
    });
}
function updateDatabase(updatePeriod, startingWait, tries) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!startingWait)
            startingWait = 0;
        if (!tries)
            tries = 1;
        try {
            yield wait(startingWait);
            yield updateCoupons(updatePeriod);
            yield updateStores(updatePeriod);
            console.log('Database updated');
        }
        catch (e) {
            console.log(`An error occurred while trying to update database. Operation will be tried again soon.`);
            console.error(e);
            updateDatabase(updatePeriod, 1000 * BASE_TIME ** tries, tries + 1);
            return;
        }
        updateDatabase(updatePeriod, updatePeriod);
        return;
    });
}
export { connectDatabase, updateDatabase };
