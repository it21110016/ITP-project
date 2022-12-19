const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const madicineSchema = new Schema({
    mid: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    mname: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    mtype: {
        type: String,
        required: true,
        trim: true,
    },
    bprice: {
        type: Number,
        required: true,
        trim: true,
    },
    edate: {
        type: Date,
        required: true,

    },
    bdate: {
        type: Date,
        required: true,


    },
    dosage: {
        type: Number,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
})

const Madicine = mongoose.model("Madicine", madicineSchema);

module.exports = Madicine;