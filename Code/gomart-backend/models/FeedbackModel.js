const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const feedbacksSchema = new mongoose.Schema({
    fname: {
        type: String,
        
    },
    lname: {
        type: String,
        
    },
    date: {
        type: String,
       
    },
    email: {
        type: String,
        
    },
    pro_qua_fb: {
        type: String,
        
    },
    deli_dri_rate: {
        type: String,
        
    },
    deli_tme_rate:{
        type: String,
       
    },
    recommendation:{
        type: String,
       
    },
    suggestions:{
        type: String,
        
    }


});

module.exports = mongoose.model('feedbacks',feedbacksSchema);