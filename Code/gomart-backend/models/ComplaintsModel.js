const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const complaintsSchema = new mongoose.Schema({
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
    category: {
        type: String,
    },
    Issue:{
        type: String,
    },
    files:{
        type: String,
        //required: true
    }


});

module.exports = mongoose.model('complaints',complaintsSchema);