const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transportSchema = new Schema({
  drivername: {
    type: String,
    required: true,
    
  },

  drivernic: {
    type: String,
    required: true,
     
  },

  vehicleno: {
    type: String,
    required: true,
    
  },

  drivermobilenumber: {
    type: Number,
    required: true,
    
  },

  transportcovidpatient: {
    type: String,
    required: true,
    
  },

  transportnormalpatient: {
    type: String,
    required: true,
    
 
  },
}, {
  timestamps: true,
});

const Transport = mongoose.model('Transport', transportSchema);

module.exports = Transport;