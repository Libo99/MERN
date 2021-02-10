const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      minlength: [6, "Userame must be at least 6 characters"],
    },
    mail: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, 'password must be at least 8 characters'],
      maxlength: 20,
    },
    created: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);

module.exports = User = mongoose.model('user', UserSchema);

