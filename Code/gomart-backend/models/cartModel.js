const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    buyingQty: {
        type: Number,
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;