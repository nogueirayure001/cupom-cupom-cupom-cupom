import { Request, Response, NextFunction } from 'express'

import {
  getUser,
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
} from '../models/users.model';
import Validation from '../utils/validation.utils';
import UserError from '../errors/user-error.error';
import DBError from '../errors/db-error.error';
import UsersDTO from '../views/users.view';

const { TYPES } = Validation;
const { MESSAGES } = UserError;

async function httpGetAllUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const users = await getAllUsers();

    return res.status(200).json(new UsersDTO({ data: users }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpCreateNewUser(req: Request, res: Response, next: NextFunction) {
  const { userName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return next(new UserError(MESSAGES.passwordsDoNotMatch));

  if (!Validation.validate(TYPES.password, password))
    return next(new UserError(MESSAGES.passwordNotSafe));

  if (!Validation.validate(TYPES.email, email))
    return next(new UserError(MESSAGES.invalidEmail));

  if (!Validation.validate(TYPES.userName, userName))
    return next(new UserError(MESSAGES.invalidUserName));

  try {
    const user = await getUser({ email });
    if (user) return next(new UserError(MESSAGES.emailAlreadyInUse));

    const newUser = await createNewUser({ userName, email, password });
    if (!newUser) return next(new DBError());

    return res.status(201).json(new UsersDTO({ user: newUser }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpUpdateUser(req: Request, res: Response, next: NextFunction) {
  const { id, update } = req.body;

  try {
    const user = await getUser({ _id: id });
    if (!user) return next(new UserError(MESSAGES.invalidResourceId));

    const { acknowledged, modifiedCount } = await updateUser(id, update);
    if (!(acknowledged && modifiedCount)) return next(new DBError());

    return res.status(200).json(new UsersDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpDeleteUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;

  if (!id) return next(new UserError(MESSAGES.invalidDataFormat));

  const user = getUser({ _id: id });
  if (!user) return next(new UserError(MESSAGES.invalidResourceId));

  try {
    const { acknowledged, deletedCount } = await deleteUser(id);

    if (!(acknowledged && deletedCount)) return next(new DBError());

    return res.status(200).json(new UsersDTO());
  } catch (e) {
    next(new DBError());
  }
}

export { httpGetAllUsers, httpCreateNewUser, httpUpdateUser, httpDeleteUser };
