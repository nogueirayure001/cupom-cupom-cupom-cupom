import mongoose from 'mongoose';

import { User } from './users.schema.d.ts';

const { Types } = mongoose;

export interface Auth {
  token?: string,
  user?: mongoose.Types.ObjectId | User,
}