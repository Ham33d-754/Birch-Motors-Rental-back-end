// user model
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phone: {
      type: String
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'manager'],
      default: 'user'
    }
  },
  {
    timestamps: true
  }
)
const User = mongoose.model('User', userSchema)

exports.module = User
