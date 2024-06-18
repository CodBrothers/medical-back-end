const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    appointment_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    status: { type: String, enum: ['paid', 'pending', 'failed'], required: true },
    payment_method: { type: String, enum: ['credit card', 'cash', 'insurance'], required: true },
    amount: { type: Number, required: true },
    discount: { type: Number, default: 0 }
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);
  module.exports = Payment;