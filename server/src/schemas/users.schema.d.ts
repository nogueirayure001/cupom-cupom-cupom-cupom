import mongoose from 'mongoose';

export interface User {
  _id?: mongoose.Types.ObjectId
  userName?: string,
  email?: string,
  password?: string,
  isMaster?: boolean,
  createdAt?: Date,
  updatedAt?: Date
}
