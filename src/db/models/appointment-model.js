const { required } = require('joi');
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    userId: {  type: mongoose.Schema.Types.ObjectId, ref: 'Doc-pat', required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doc-pat', required: true },
    appointmentTime: { type:String },
    status: {
      type: String,
      default: 'pending',
    },
  });
  
  const Appointment = mongoose.model('Appointment', appointmentSchema);
  module.exports = Appointment;