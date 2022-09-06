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
import newsletterSchema from '../schemas/newsletter.schema.js';
const newsletterModel = mongoose.model('newsletter', newsletterSchema);
function subscribeToNewsletter(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const { upsertedCount } = yield newsletterModel.updateOne({ email: email }, {}, { upsert: true });
        if (upsertedCount)
            return true;
        return false;
    });
}
function unsubscribeFromNewsletter(id, email) {
    return __awaiter(this, void 0, void 0, function* () {
        const { deletedCount } = yield newsletterModel.deleteOne({
            _id: id,
            email: email
        });
        if (deletedCount)
            return true;
        return false;
    });
}
function getSubscribers() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield newsletterModel.distinct('email');
    });
}
export { subscribeToNewsletter, unsubscribeFromNewsletter, getSubscribers };
