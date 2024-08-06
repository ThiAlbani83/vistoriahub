import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  address: [
    {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
    },
  ],
  phone: { type: String },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
