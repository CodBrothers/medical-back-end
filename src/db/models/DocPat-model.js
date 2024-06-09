const mongoose = require('mongoose');

const  DocPatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Date, required: true },
    address: { type: String, required: true },
    adhar: {type: String, required: true},
    phoneNumber: {type:Number, required: true},
    role: {type:String, required:true },
    days: {type:String, required:true },
    qualification: {type:String, required:true },
    availability: {type:String, reuired:true },
  });
  
  const docPat = mongoose.model('Doc-pat',DocPatSchema);
  module.exports =docPat;