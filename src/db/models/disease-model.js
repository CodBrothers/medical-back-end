const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    disease_name: { type: String, required: true },
    diagnosis_date: { type: Date, required: true },
    treatment: { type: String, required: true }
  });
  
  const Disease = mongoose.model('Disease', diseaseSchema);
  module.exports = Disease;