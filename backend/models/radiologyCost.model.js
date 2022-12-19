const mongoose = require('mongoose');
var Sequelize = require('sequelize');

const Schema = mongoose.Schema;

const radiologyCostSchema = new Schema({

    // _id: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true

    // },
    patientname: {
        type: String,
        required: true,
    
        trim: true

    },
    date: {
        type: Date,
        required: true
    },

    testingname: {
        type: String,
        required: true,
        
        trim: true
    },

    scanCost: {
        type: Number
    },
    
    noOfScans: {
        type: Number
    },
    totalCost: {
        type: Number
    }
}, {
    timestamps: true,
})

const RadiologyCost = mongoose.model("RadiologyCost", radiologyCostSchema);

module.exports = RadiologyCost;