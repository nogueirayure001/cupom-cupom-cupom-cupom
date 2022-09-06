var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { subscribeToNewsletter, unsubscribeFromNewsletter, getSubscribers } from '../models/newsletter.model.js';
import Validation from '../utils/validation.utils.js';
import NewsletterDTO from '../views/newsletter.view.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
const { MESSAGES: ERROR_MESSAGES } = UserError;
const { MESSAGES: SUCCESS_MESSAGES } = NewsletterDTO;
function httpSubscribeToNewsletter(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        const validEmail = Validation.validate(Validation.TYPES.email, email);
        if (!validEmail)
            return next(new UserError(ERROR_MESSAGES.invalidEmail));
        try {
            const subscribed = yield subscribeToNewsletter(email);
            if (!subscribed)
                return next(new UserError(ERROR_MESSAGES.emailAlreadyInUse));
            return res
                .status(201)
                .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.subscribe }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpUnsubscribeFromNewsletter(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id, email } = req.query;
        try {
            const unsubscribed = yield unsubscribeFromNewsletter(id, email);
            if (!unsubscribed)
                return next(new UserError(ERROR_MESSAGES.emailNotFound));
            return res
                .status(200)
                .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.unsubscribe }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
function httpGetSubscribers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield getSubscribers();
            return res
                .status(200)
                .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.fetch, data }));
        }
        catch (e) {
            next(new DBError());
        }
    });
}
export { httpSubscribeToNewsletter, httpUnsubscribeFromNewsletter, httpGetSubscribers };
