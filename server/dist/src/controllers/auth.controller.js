var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser, verifyUser } from '../models/users.model.js';
import { createToken } from '../models/auth.model.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import AuthDTO from '../views/auth.view.js';
const { MESSAGES } = UserError;
function httpLogUserIn(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        //validar email e password
        try {
            const verifiedUser = yield verifyUser(email, password);
            if (!verifiedUser)
                return next(new UserError(MESSAGES.invalidCredentials));
            const user = yield getUser({ email });
            const token = yield createToken(user);
            const DTO = { token, user };
            return res.status(200).json(new AuthDTO(DTO));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpLogUserOut(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.headers['authorization'];
        if (!token)
            return next(new UserError(MESSAGES.invalidCredentials));
        try {
            // to do
            return res.status(200).json(new AuthDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
export { httpLogUserIn, httpLogUserOut };
