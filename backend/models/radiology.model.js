const mongoose = require('mongoose');
var Sequelize = require('sequelize');

const Schema = mongoose.Schema;

const radiologySchema = new Schema({
  patientname: {
    type: String,
    required: true,
    
  },

  nic: {
    type: String,
    required: true,
     
  },

  email: {
    type: String,
    required: true,
    
  },

  address: {
    type: String,
    required: true,
    
  },

  mobilenumber: {
    type: Number,
    required: true,
    
  },

  age: {
    type: Number,
    required: true,
    
  },

  gender: {
    type: String,
    required: true,
    
  },

  testingname: {
    type: String,
    required: true,
    
  },
}, {
  timestamps: true,
});

const Radiology = mongoose.model('Radiology', radiologySchema);

module.exports = Radiology;
