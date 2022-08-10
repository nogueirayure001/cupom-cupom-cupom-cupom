import {
  getAdmin,
  getAllAdmins,
  createNewAdmin,
  updateAdmin,
  deleteAdmin
} from '../model/admins.model.js';
import Validation from '../utils/validation.utils.js';
import FormError from '../errors/form-error.error.js';
import DBError from '../errors/db-error.error.js';
import AdminsDTO from '../views/admins.view.js';

const { TYPES } = Validation;
const { MESSAGES } = FormError;

async function httpGetAllAdmins(req, res, next) {
  try {
    const admins = await getAllAdmins();

    return res.status(200).json(new AdminsDTO({ data: admins }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpCreateNewAdmin(req, res, next) {
  const { userName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return next(new FormError(MESSAGES.passwordsDoNotMatch));

  if (!Validation.validate(TYPES.password, password))
    return next(new FormError(MESSAGES.passwordNotSafe));

  if (!Validation.validate(TYPES.email, email))
    return next(new FormError(MESSAGES.invalidEmail));

  if (!Validation.validate(TYPES.userName, userName))
    return next(new FormError(MESSAGES.invalidUserName));

  try {
    const admin = await getAdmin({ email });
    if (admin) return next(new FormError(MESSAGES.emailAlreadyInUse));

    const newAdmin = await createNewAdmin({ userName, email, password });
    if (!newAdmin) return next(new DBError());

    return res.status(201).json(new AdminsDTO({ admin: newAdmin }));
  } catch (e) {
    next(new DBError());
  }
}

async function httpUpdateAdmin(req, res, next) {
  const { id, update } = req.body;

  try {
    const admin = await getAdmin({ id });
    if (!admin) return next(new Error('Admin not found'));

    const { acknowledged, modifiedCount } = await updateAdmin(id, update);
    if (!(acknowledged && modifiedCount)) return next(new DBError());

    return res.status(200).json(new AdminsDTO());
  } catch (e) {
    next(new DBError());
  }
}

async function httpDeleteAdmin(req, res, next) {
  const { id } = req.body;

  if (!id) return next(new Error('Bad request'));

  const admin = getAdmin({ id });
  if (!admin) return next(new Error('Admin not found'));

  try {
    const { acknowledged, deletedCount } = await deleteAdmin(id);

    if (!(acknowledged && deletedCount)) return next(new DBError());

    return res.status(200).json(new AdminsDTO());
  } catch (e) {
    next(new DBError());
  }
}

export {
  httpGetAllAdmins,
  httpCreateNewAdmin,
  httpUpdateAdmin,
  httpDeleteAdmin
};
