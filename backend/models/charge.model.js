const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chargeSchema = new Schema({
    dateofcharge: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    roomward: {
        type: String
    },

    wardChargePerDay: {
        type: Number,
    },
    roomChargePerDay: {
        type: Number
    },
    noOfDays: {
        type: Number
    },
    totalCharge: {
        type: Number
    }
}, {
    timestamps: true,
})

const Charge = mongoose.model("Charge", chargeSchema);

module.exports = Charge;