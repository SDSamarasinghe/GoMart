const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema({
  Receviver_Name: {
    type: String,
    required: true,
  },

  Receviver_Address: {
    type: String,
    required: true,
  },

  Receviver_phoneNo: {
    type: String,
    required: true,
  },

  conformation: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  instruction: {
    type: String,
    required: true,
  },
});

const shipping = mongoose.model("shipping", shippingSchema);

module.exports = shipping;
