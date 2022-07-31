import mongoose from 'mongoose';

const couponsSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    store: {
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      link: {
        type: String
      }
    },
    category: {
      name: {
        type: String,
        required: true
      }
    },
    vigency: {
      type: String
    },
    link: {
      type: String,
      required: true
    },
    new: {
      type: Boolean
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
