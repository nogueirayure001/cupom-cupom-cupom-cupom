import { Request, Response, NextFunction } from 'express';

import ErrorDTO from '../views/errors.view.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import AuthError from '../errors/auth-error.error.js';

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof UserError) {
    return res.status(400).json(new ErrorDTO(error));
  }

  if (error instanceof AuthError) {
    return res.status(401).json(new ErrorDTO(error));
  }

  if (error instanceof DBError) {
    return res.status(500).json(new ErrorDTO(error));
  }

  return res.status(400).json(new ErrorDTO(error));
}

export default errorHandler;
