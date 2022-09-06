import { Request, Response, NextFunction } from 'express';

import { getUser, verifyUser } from '../models/users.model.js';
import { createToken, verifyToken } from '../models/auth.model.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import AuthDTO from '../views/auth.view.js';
import { User } from '../schemas/users.schema.d.js';

const { MESSAGES } = UserError;

async function httpLogUserIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;

  //validar email e password

  try {
    const verifiedUser = await verifyUser(email, password);
    if (!verifiedUser) return next(new UserError(MESSAGES.invalidCredentials));

    const user = await getUser({ email }) as User;

    const token = await createToken(user) as string;

    const DTO = { token, user };

    return res.status(200).json(new AuthDTO(DTO));
  } catch (e) {
    next(new DBError());
  }
}

async function httpLogUserOut(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) return next(new UserError(MESSAGES.invalidCredentials));

  try {
    // to do

    return res.status(200).json(new AuthDTO());
  } catch (e) {
    next(new DBError());
  }
}

export { httpLogUserIn, httpLogUserOut };
