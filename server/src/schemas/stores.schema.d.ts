import mongoose from 'mongoose';

export interface Store {
  _id?: mongoose.Types.ObjectId,
  name?: string,
  image?: string,
  source?: string,
  featured?: boolean,
  createdAt?: Date,
  updatedAt?: Date
}

