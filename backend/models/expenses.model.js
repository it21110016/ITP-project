const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expensesSchema = new Schema({

    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,

    // },

    type: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },

    department: {
        type: String,
        required: true,
        trim: true
    },

    Value: {
        type: Number

    }
}, {
    timestamps: true,
});

const expenses = mongoose.model("expenses", expensesSchema);

module.exports = expenses;
