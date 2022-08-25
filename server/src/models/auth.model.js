import mongoose from 'mongoose';

import authSchema from '../schemas/auth.schema.js';
const authModel = mongoose.model('auth', authSchema);

async function getTokenData(userId) {
  return await authModel.findOne({ user: userId }).populate('user');
}

async function verifyTokenValidity(token) {
  return (await authModel.findOne({ token })) ? true : false;
}

async function createToken(userId) {
  const filter = { token: userId };

  const update = {
    token: userId,
    expireAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    user: userId
  };

  const options = { upsert: true };

  return await authModel.updateOne(filter, update, options);
}

async function deleteToken(token) {
  return authModel.deleteOne({ token });
}

export { getTokenData, verifyTokenValidity, createToken, deleteToken };
