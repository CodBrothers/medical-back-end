const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String },
  role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;