import mongoose from 'mongoose';

export interface Newsletter {
  _id?: mongoose.Types.ObjectId,
  email?: string,
  createdAt?: Date,
  updatedAt?: Date 
}