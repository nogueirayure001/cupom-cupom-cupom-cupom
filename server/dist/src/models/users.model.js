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
import bcrypt from 'bcryptjs';
import usersSchema from '../schemas/users.schema.js';
const usersModel = mongoose.model('user', usersSchema);
function getUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield usersModel.findOne(user, {
            __v: 0,
            createdAt: 0,
            updatedAt: 0,
            password: 0
        });
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield usersModel.find({ isMaster: false }, { __v: 0, createdAt: 0, updatedAt: 0, password: 0 });
        return users.map(({ _id, userName, email, isMaster }) => ({
            userName,
            email,
            isMaster,
            id: _id
        }));
    });
}
function createNewUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const { userName, email, password } = user;
        const hash = yield bcrypt.hash(password, 12);
        const newUser = new usersModel({
            userName,
            email,
            password: hash
        });
        return yield newUser.save();
    });
}
function updateUser(userId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        if (update.password) {
            update.password = yield bcrypt.hash(update.password, 12);
        }
        return yield usersModel.updateOne({ _id: userId }, update);
    });
}
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield usersModel.deleteOne({ _id: userId });
    });
}
function verifyUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const filter = { email };
        const user = yield usersModel.findOne(filter);
        if (!user)
            return false;
        return bcrypt.compare(password, user.password);
    });
}
export { getUser, getAllUsers, createNewUser, updateUser, deleteUser, verifyUser };
