const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    buyingQty: {
        type: Number,
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;