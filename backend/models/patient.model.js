
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({

  patienttype: {
    type:String, 
  },

  patientname: { 
    type: String,
    required: true
   },

   gender: {
    type:String,
   },

  nic: { 
    type: String, 
    required: true,
   },

  mobileno: { 
    type: Number, 
    required: true, 
    maxlength:10, 
    minlength:10, 
    unique:true
   },

  email: { 
    type: String, 
    required: true 
  },

  disease: { 
    type: String, 
    required: true 
  },

  roomward: {
    type: String,
  },

  roomwardno: {
  type: Number,
  },

  dateofadmit: { 
    type: Date, 
    required: true 
  },
  
}, {
  timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;