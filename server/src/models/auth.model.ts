import mongoose from 'mongoose';

import authSchema from '../schemas/auth.schema';
import { Auth } from '../schemas/auth.schema.d'; 

const authModel = mongoose.model<Auth>('auth', authSchema);

async function getTokenData(userId: mongoose.Types.ObjectId): Promise<Auth | null> {
  return await authModel.findOne({ user: userId }).populate('user');
}

async function verifyTokenValidity(token: string) {
  return (await authModel.findOne({ token })) ? true : false;
}

async function createToken(userId: mongoose.Types.ObjectId) {
  const filter = { token: userId };

  const update = {
    token: userId,
    expireAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    user: userId
  };

  const options = { upsert: true };

  return await authModel.updateOne(filter, update, options);
}

async function deleteToken(token: string) {
  return authModel.deleteOne({ token });
}

export { getTokenData, verifyTokenValidity, createToken, deleteToken };
