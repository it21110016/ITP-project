const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    name: {
        type: String,
        required: true,
        trim: true,

    },
    department: {
        type: String,
        required: true,
        trim: true,

    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    nic: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
}, {
    timestamps: true,
})

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;