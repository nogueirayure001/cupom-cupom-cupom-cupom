import {Request, Response, NextFunction} from 'express';

import AuthError from '../errors/auth-error.error.js';
import { verifyTokenValidity } from '../models/auth.model.js';

const allowedAuthSchemes = ['Bearer', 'Basic'];

async function authentication(req: Request, res: Response, next: NextFunction) {
  const authHeader: string | undefined = req.headers['authorization'];

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

  const validToken = await verifyTokenValidity(token);

  if (!validToken) return next(new AuthError());

  req.headers['authorization'] = token;

  next();
}

export default authentication;
