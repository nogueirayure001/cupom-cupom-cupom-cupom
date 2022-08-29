import mongoose from 'mongoose';

import { Coupon } from './coupons.schema.d.js'

const couponsSchema = new mongoose.Schema<Coupon>(
  {
    description: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    store: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true,
      default: 'Lomadee'
    },
    featured: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

export default couponsSchema;
