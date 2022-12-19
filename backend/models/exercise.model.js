const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({

    cid: {
        type: String,
        unique: true,
        required: true,
    },
    cname: {
        type: String,
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
    mno: {
        type: String,
        maxlength: 10,
        minlength: 10,
        required: true,
    },
    madicineno1: {
        type: String,
        required: true,
    },
    madicine1: {
        type: String,
        required: true,
    },
    dose1: {
        type: Number,
        required: true,
    },
    mprice1: {
        type: Number,
        required: true,
        trim: true,

    },
    madicineno2: {
        type: String,


    },
    madicine2: {
        type: String,

    },
    dose2: {
        type: Number,

    },
    mprice2: {
        type: Number,
        trim: true,

    },
    madicineno3: {
        type: String,


    },
    madicine3: {
        type: String,

    },
    dose3: {
        type: Number,

    },
    mprice3: {
        type: Number,
        trim: true,

    },
    madicineno4: {
        type: String,


    },
    madicine4: {
        type: String,

    },
    dose4: {
        type: Number,

    },
    mprice4: {
        type: Number,
        trim: true,

    },
    madicineno5: {
        type: String,


    },
    madicine5: {
        type: String,

    },
    dose5: {
        type: Number,

    },

    mprice5: {
        type: Number,
        trim: true,

    },

    totalprice: {
        type: Number,

    },
}, {
    timestamps: true,
})
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;