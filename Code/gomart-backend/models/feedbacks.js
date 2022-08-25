const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const feedbacksSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pro_qua_fb: {
        type: String,
        required: false
    },
    deli_dri_rate: {
        type: String,
        required: false
    },
    deli_tme_rate:{
        type: String,
        required: false
    },
    recommendation:{
        type: String,
        required: true
    },
    suggestions:{
        type: String,
        required: true
    }


});

module.exports = mongoose.model('feedbacks',feedbacksSchema);