const mongoose = require('mongoose');

const  DocPatSchema = new mongoose.Schema({
    name: { type: String},
    age: { type: Date  },
    address: { type: String },
    adhar: {type: String},
    phoneNumber: {type:Number },
    role: {type:String, required:true, enum: ['doctor', 'patient'] },
    days: {type:String  },
    qualification: {type:String },
    availability: {type:String },
  });
  
  const docPat = mongoose.model('Doc-pat',DocPatSchema);
  module.exports =docPat;