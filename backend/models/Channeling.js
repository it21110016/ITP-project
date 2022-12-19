const { text } = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const channelSchema = new Schema({

    // _id:{
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    // },
    
    
    PatientName :{
        type : String,
        required: true,
        unique:true,
        trim:true
    },

    Age:{
        type: String,
        required: true
    },

    MobileNumber:{
        type: String,
        required: true,
        maxlength:10,
        minlength:10,
        unique:true
    },

    DoctorName :{
        type : String,
        required: true,
        unique:true,
        trim:true
    },

    date :{
        type : Date,
        required: true
    },

    DoctorFee :{
        type : Number
    },

    HospitalFee :{
        type : Number
    },

    ChannelFee:{
        type: Number
    }

}, {
    timestamps: true,
})

const Channeling = mongoose.model("Channeling",channelSchema);

module.exports = Channeling;