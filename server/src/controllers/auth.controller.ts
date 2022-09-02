import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import { getUser, verifyUser } from '../models/users.model';
import {
  getTokenData,
  createToken,
  deleteToken
} from '../models/auth.model';
import UserError from '../errors/user-error.error';
import DBError from '../errors/db-error.error';
import AuthDTO from '../views/auth.view';
import { User } from '../schemas/users.schema.d';

const { MESSAGES } = UserError;

async function httpLogUserIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  //validar email e password

  try {
    const verifiedUser = await verifyUser(email, password);
    if (!verifiedUser) return next(new UserError(MESSAGES.invalidCredentials));

    const user = await getUser({ email }) as User;
    const userId = user._id as mongoose.Types.ObjectId;

    const { upsertedCount, modifiedCount } = await createToken(userId);
    if (!(upsertedCount || modifiedCount)) return next(new DBError());

    const tokenData = await getTokenData(userId);

    return res.status(200).json(new AuthDTO(tokenData));
  } catch (e) {
    next(new DBError());
  }
}

async function httpLogUserOut(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) return next(new UserError(MESSAGES.invalidCredentials));

  try {
    await deleteToken(token);

    return res.status(200).json(new AuthDTO());
  } catch (e) {
    next(new DBError());
  }
}

export { httpLogUserIn, httpLogUserOut };
