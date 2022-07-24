import mongoose from "mongoose";

const storesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

export default storesSchema;
