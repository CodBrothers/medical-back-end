const mongoose = require('mongoose');

const  DocPatSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    name: { type: String, required: true },
    Age: { type: Date, required: true },
    Address: { type: String, required: true },
    Adhar: {type: String, required: true},
    Phone_Number: {type:Number, required: true},
    role: {type:String, required:true },
    days: {type:String, required:true },
    qualification: {type:String, required:true },
    availability: {type:String, reuired:true },
  });
  
  const docPat = mongoose.model('Doc-pat',DocPatSchema);
  module.exports =docPat;