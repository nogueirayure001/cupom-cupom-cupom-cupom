import mongoose from 'mongoose';

import { User } from './users.schema.d.js'

const usersSchema = new mongoose.Schema<User>(
  {
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isMaster: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

export default usersSchema;
