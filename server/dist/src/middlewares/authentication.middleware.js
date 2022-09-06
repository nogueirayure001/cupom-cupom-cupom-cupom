var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AuthError from '../errors/auth-error.error.js';
import { verifyToken } from '../models/auth.model.js';
const allowedAuthSchemes = ['Bearer', 'Basic'];
function authentication(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            res.append('WWW-Authenticate', 'Bearer realm="Access to the staging site"');
            return next(new AuthError());
        }
        const authHeaderArray = authHeader.split(' ');
        const [scheme, token] = authHeaderArray;
        if (authHeaderArray.length !== 2 || !allowedAuthSchemes.includes(scheme)) {
            res.append('WWW-Authenticate', 'Bearer realm="Access to the staging site"');
            return next(new AuthError());
        }
        try {
            verifyToken(token);
            req.headers['authorization'] = token;
            next();
        }
        catch (e) {
            return next(new AuthError());
        }
    });
}
export default authentication;
