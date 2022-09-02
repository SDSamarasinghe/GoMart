const { time, timeEnd } = require("console");
const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  driver_Name: {
    type: String,
    required: true,
  },


  Receviver_Name: {
    type: String,
    required: true,
  },


  delivery_date: {
    type:String,
    required: true,
  },


  delivery_time: {
    type: String,
    required: true,
  },


  delivery_status: {
    type: String,
    required: true,
  },


  Receviver_phoneNo: {
    type: String,
    required: true,
  },


  delivery_details: {
    type: String,
    required: true,
  },


  special_Notice: {
    type: String,
    required: true,
  },


  Date: {
    type: Date,
    required: true,
  },

  
  signature: {
    type: String,
    required: true,
  },
});

const delivery = mongoose.model("delivery", deliverySchema);

module.exports = delivery;
