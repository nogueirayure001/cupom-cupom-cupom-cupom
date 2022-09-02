import mongoose from 'mongoose';

import { Auth } from './auth.schema.d'

const authSchema = new mongoose.Schema<Auth>(
  {
    token: {
      type: String,
      required: true
    },
    expireAt: {
      type: Date,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
);

export default authSchema;
