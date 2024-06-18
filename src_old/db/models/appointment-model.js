const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    time: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'pending', 'canceled'], required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    disease_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disease', required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  });
  
  const Appointment = mongoose.model('Appointment', appointmentSchema);
  module.exports = Appointment;