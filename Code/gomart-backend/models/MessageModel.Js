const { status } = require('express/lib/response');
const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    fname: {
        type: String,    
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
  
});

module.exports = mongoose.model('message',messageSchema);