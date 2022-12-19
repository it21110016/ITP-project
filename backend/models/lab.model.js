
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labSchema = new Schema({
  patientname: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true},
  testdate: { type: Date, required: true },
  mobilenumber: {type: Number, required: true},
  testtype: {type: String, required: true},
  testresult: {type: String, required: true},
}, {
  timestamps: true,
});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;