var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from 'jsonwebtoken';
import { config } from '../../config/config.js';
const JWT_PRIVATE_KEY = config.app.JWT_PRIVATE_KEY;
function sign(payload, secret, options) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, encoded) => {
            if (err)
                reject(err);
            resolve(encoded);
        });
    });
}
function verify(token, secret) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, decoded) => {
            if (err)
                reject(err);
            resolve(decoded);
        });
    });
}
function createToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _id, isMaster } = user;
        const payload = { _id, isMaster };
        return yield sign(payload, JWT_PRIVATE_KEY, {
            expiresIn: '1d'
        });
    });
}
function verifyToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield verify(token, JWT_PRIVATE_KEY);
    });
}
export { createToken, verifyToken };
