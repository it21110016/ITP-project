const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,

    // },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    nic: {
        type: String,
        required: true,
        minlength: 10,
        unique: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true,

    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
})

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;