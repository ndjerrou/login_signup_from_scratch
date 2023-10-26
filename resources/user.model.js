const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    max: 20,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 256,
  },
});

module.exports = mongoose.model('user', userSchema);
