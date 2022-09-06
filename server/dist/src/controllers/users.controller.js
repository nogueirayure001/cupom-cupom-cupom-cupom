var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUser, getAllUsers, createNewUser, updateUser, deleteUser } from '../models/users.model.js';
import Validation from '../utils/validation.utils.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import UsersDTO from '../views/users.view.js';
const { TYPES } = Validation;
const { MESSAGES } = UserError;
function httpGetAllUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield getAllUsers();
            return res.status(200).json(new UsersDTO({ data: users }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpCreateNewUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userName, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword)
            return next(new UserError(MESSAGES.passwordsDoNotMatch));
        if (!Validation.validate(TYPES.password, password))
            return next(new UserError(MESSAGES.passwordNotSafe));
        if (!Validation.validate(TYPES.email, email))
            return next(new UserError(MESSAGES.invalidEmail));
        if (!Validation.validate(TYPES.userName, userName))
            return next(new UserError(MESSAGES.invalidUserName));
        try {
            const user = yield getUser({ email });
            if (user)
                return next(new UserError(MESSAGES.emailAlreadyInUse));
            const newUser = yield createNewUser({ userName, email, password });
            if (!newUser)
                return next(new DBError());
            return res.status(201).json(new UsersDTO({ user: newUser }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpUpdateUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, update } = req.body;
        try {
            const user = yield getUser({ _id: id });
            if (!user)
                return next(new UserError(MESSAGES.invalidResourceId));
            const { acknowledged, modifiedCount } = yield updateUser(id, update);
            if (!(acknowledged && modifiedCount))
                return next(new DBError());
            return res.status(200).json(new UsersDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpDeleteUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        if (!id)
            return next(new UserError(MESSAGES.invalidDataFormat));
        const user = getUser({ _id: id });
        if (!user)
            return next(new UserError(MESSAGES.invalidResourceId));
        try {
            const { acknowledged, deletedCount } = yield deleteUser(id);
            if (!(acknowledged && deletedCount))
                return next(new DBError());
            return res.status(200).json(new UsersDTO());
        }
        catch (e) {
            next(new DBError());
        }
    });
}
export { httpGetAllUsers, httpCreateNewUser, httpUpdateUser, httpDeleteUser };
