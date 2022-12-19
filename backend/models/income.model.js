const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incomeSchema = new Schema({

    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,

    // },

    department:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    Value:{
        type: Number

    }
}, {
    timestamps: true,
});

const income = mongoose.model("income", incomeSchema);

module.exports = income;
