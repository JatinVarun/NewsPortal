// models/User.js
const mongoose = require('mongoose');

// Create a schema for User
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
