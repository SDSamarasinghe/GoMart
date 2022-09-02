const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = new mongoose.Schema({

    OrderID:{
        type:String,
        required:true
    },

    OrderDate:{
        type:Date,
        required:true
    },

    DespatchDate:{
        type:Date,
        required:true
    },

    DeliveryMethod:{
        type:String,
        required:true
    },

    ItemList:{
        type:String,
        required:true
    },
    
    Remarks:{
        type:Number,
        required:true
    }

});


module.exports = mongoose.model('order',orderSchema);
