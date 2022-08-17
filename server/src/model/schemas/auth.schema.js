import mongoose from 'mongoose';

const authSchema = mongoose.Schema(
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
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
);

export default authSchema;
