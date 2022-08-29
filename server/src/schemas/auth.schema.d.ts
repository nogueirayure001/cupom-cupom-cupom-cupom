import mongoose from 'mongoose';

import { User } from './users.schema.d.ts';

const { Types } = mongoose;

export interface Auth {
  _id?: mongoose.Types.ObjectId
  token?: string,
  expireAt?: Date,
  user?: mongoose.Types.ObjectId | User,
  createdAt?: Date,
  updatedAt?: Date
}