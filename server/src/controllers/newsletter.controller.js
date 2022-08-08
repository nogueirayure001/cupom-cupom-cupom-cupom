import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getSubscribers
} from '../model/newsletter.model.js';
import Validation from '../utils/validation.utils.js';
import NewsletterDTO from '../views/newsletter.view.js';
import FormError from '../errors/form-error.error.js';
import DBError from '../errors/db-error.error.js';

const { MESSAGES: ERROR_MESSAGES } = FormError;
const { MESSAGES: SUCCESS_MESSAGES } = NewsletterDTO;

async function httpSubscribeToNewsletter(req, res, next) {
  const { email } = req.body;

  const validEmail = Validation.validate(Validation.TYPES.email, email);

  if (!validEmail) return next(new FormError(ERROR_MESSAGES.invalidEmail));

  try {
    const subscribed = await subscribeToNewsletter(email);

    if (!subscribed)
      return next(new FormError(ERROR_MESSAGES.emailAlreadySubscribed));

    return res
      .status(201)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.subscribe }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpUnsubscribeFromNewsletter(req, res, next) {
  const { id, email } = req.query;

  try {
    const unsubscribed = await unsubscribeFromNewsletter(id, email);

    if (!unsubscribed) return next(new FormError(ERROR_MESSAGES.emailNotFound));

    return res
      .status(200)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.unsubscribe }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSubscribers(req, res, next) {
  try {
    const data = await getSubscribers();

    return res
      .status(200)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.fetch, data }));
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpSubscribeToNewsletter,
  httpUnsubscribeFromNewsletter,
  httpGetSubscribers
};
