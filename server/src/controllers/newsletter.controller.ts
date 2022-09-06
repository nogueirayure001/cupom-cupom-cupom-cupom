import {Request, Response, NextFunction} from 'express';

import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getSubscribers
} from '../models/newsletter.model.js';
import Validation from '../utils/validation.utils.js';
import NewsletterDTO from '../views/newsletter.view.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import mongoose from 'mongoose';

const { MESSAGES: ERROR_MESSAGES } = UserError;
const { MESSAGES: SUCCESS_MESSAGES } = NewsletterDTO;

async function httpSubscribeToNewsletter(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  const validEmail = Validation.validate(Validation.TYPES.email, email);

  if (!validEmail) return next(new UserError(ERROR_MESSAGES.invalidEmail));

  try {
    const subscribed = await subscribeToNewsletter(email);

    if (!subscribed)
      return next(new UserError(ERROR_MESSAGES.emailAlreadyInUse));

    return res
      .status(201)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.subscribe }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpUnsubscribeFromNewsletter(req: Request, res: Response, next: NextFunction) {
  const { id, email } = req.query as unknown as { 
    id: mongoose.Types.ObjectId,
    email: string 
  };

  try {
    const unsubscribed = await unsubscribeFromNewsletter(id, email);

    if (!unsubscribed) return next(new UserError(ERROR_MESSAGES.emailNotFound));

    return res
      .status(200)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.unsubscribe }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpGetSubscribers(req: Request, res: Response, next: NextFunction) {
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
