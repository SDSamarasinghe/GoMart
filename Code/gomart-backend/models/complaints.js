const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const complaintsSchema = new mongoose.Schema({
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
    category: {
        type: String,
        required: false
    },
    Issue:{
        type: String,
        required: false
    },
    files:{
        type: String,
        //required: true
    }


});

module.exports = mongoose.model('complaints',complaintsSchema);