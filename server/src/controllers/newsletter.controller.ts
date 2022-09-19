import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import sgMail from '@sendgrid/mail';

import {
  subscribeToNewsletter,
  unsubscribeFromNewsletter,
  getSubscribers
} from '../models/newsletter.model.js';
import Validation from '../utils/validation.utils.js';
import NewsletterDTO from '../views/newsletter.view.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import addUnsubscribeLink from '../utils/add-unsubscribe.utils.js';
import { config } from '../../config/config.js';

const { MESSAGES: ERROR_MESSAGES } = UserError;
const { MESSAGES: SUCCESS_MESSAGES } = NewsletterDTO;

sgMail.setApiKey(config.emailer.SENDGRID_API_KEY);

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

async function httpAdminSendNewsletter(req: Request, res: Response, next: NextFunction) {
  const { files } = req as any;
  const { subject } = req.body;

  if (!files) throw new UserError(ERROR_MESSAGES.invalidFile); 
  if (!subject) throw new UserError(ERROR_MESSAGES.invalidSubject); 

  const newsletterHTML: string = files.newsletter.data.toString();

  try {
    const subscribers = await getSubscribers();

    subscribers.forEach((subscriber) => {
      const { _id, email } = subscriber as {
        _id: mongoose.Types.ObjectId,
        email: string
      };

      const html = addUnsubscribeLink(newsletterHTML, _id, email);

      const msg = {
        to: email,
        from: config.emailer.SENDER,
        subject,
        html
      };

      sgMail.send(msg);
    });

    return res
      .status(200)
      .json(new NewsletterDTO({ message: SUCCESS_MESSAGES.send }));
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpSubscribeToNewsletter,
  httpUnsubscribeFromNewsletter,
  httpAdminSendNewsletter
};
