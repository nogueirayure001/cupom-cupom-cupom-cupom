import mongoose from 'mongoose';

const storesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    image: {
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

export default storesSchema;
