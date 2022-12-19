const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tfeeSchema = new Schema({
    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true

    // },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
   
    date: {
        type: Date,
        required: true
    },
    vaccineFee: {
        type: Number
    },
    doseSize: {
        type: Number
    },
    totalFee: {
        type: Number
    }
}, {
    timestamps: true,
})

const Tfee = mongoose.model("Tfee", tfeeSchema);

module.exports = Tfee;