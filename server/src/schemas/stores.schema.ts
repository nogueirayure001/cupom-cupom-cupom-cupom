import mongoose from 'mongoose';

import { Store } from './stores.schema.d.js'

const storesSchema = new mongoose.Schema<Store>(
  {
    name: {
      type: String,
      required: true
    },
    image: {
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

export default storesSchema;
