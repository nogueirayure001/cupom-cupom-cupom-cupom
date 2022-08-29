import mongoose from 'mongoose';

import { Newsletter } from './newsletter.schema.d.js'

const newsletterSchema = new mongoose.Schema<Newsletter>(
  {
    email: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default newsletterSchema;
