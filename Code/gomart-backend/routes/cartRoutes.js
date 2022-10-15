const express = require("express");
const router = express.Router();

const {
    addToCart,
    increase,
    decrease,
    deleteCart,
    getAll,
    totPrice
} = require("../controllers/cartController");

//add Product
router.post("/cart", addToCart);

//tot price
router.get("/tot", totPrice);

//increase Qty
router.get("/increase/:id", increase);

//decrease Qty
router.get("/decrease/:id", decrease);

//get All data
router.get("/getAll", getAll);

//clear the cart
router.delete("/deleteCart", deleteCart)

module.exports = router;