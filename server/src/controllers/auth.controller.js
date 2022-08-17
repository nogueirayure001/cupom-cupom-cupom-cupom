import { getUser } from '../model/users.model.js';
import { getTokenData, createToken, deleteToken } from '../model/auth.model.js';
import UserError from '../errors/user-error.error.js';
import DBError from '../errors/db-error.error.js';
import AuthDTO from '../views/auth.view.js';

const { MESSAGES } = UserError;

async function httpLogUserIn(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await getUser({ email, password });
    if (!user) return next(new UserError(MESSAGES.invalidCredentials));

    const { upsertedCount, modifiedCount } = await createToken(user._id);
    if (!(upsertedCount || modifiedCount)) return next(new DBError());

    const tokenData = await getTokenData(user._id);

    return res.status(200).json(new AuthDTO(tokenData));
  } catch (e) {
    next(new DBError());
  }
}

async function httpLogUserOut(req, res, next) {
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
