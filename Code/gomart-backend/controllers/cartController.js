const Cart = require("../models/cartModel");
const asyncHandler = require("express-async-handler");

const addToCart = asyncHandler(async (req, res) => {
    const {
        productName,
        price,
        image,
        buyingQty
    } = req.body;

    const newCartProduct = new Cart({
        productName,
        price,
        image,
        buyingQty
    });

    newCartProduct.save()
        .then((productCart) => {
            res.status(200).send({status: "Product Added To Cart"})
            .json({
                id: productCart._id,
                Name: productCart.productName,
                Price: productCart.price,
                Image: productCart.image,
                Qty: productCart.buyingQty
            });
            console.log("Product Added To Cart.");
        }).catch((err) => {
            console.log(err);
        });
});

const increase = async (req, res) => {
    const prvID = req.params.id;
    try {
      const id = await Cart.findById(prvID);
  
      if (!id) {
        return res.status(404).json("There is no Product");
      }
  
      const updateQty1 = id.buyingQty + 1

      const updateQty = await Cart.findByIdAndUpdate(prvID, {
        buyingQty: updateQty1
      });
  
      res.status(201).json({
        updated: true,
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const decrease = async (req, res) => {
    const prvID = req.params.id;
    try {
      const id = await Cart.findById(prvID);
  
      if (!id) {
        return res.status(404).json("There is no Product");
      }
  
      const updateQty1 = id.buyingQty - 1

      const updateQty = await Cart.findByIdAndUpdate(prvID, {
        buyingQty: updateQty1
      });
  
      res.status(201).json({
        updated: true,
      });
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const deleteCart = async (req, res) => {
  
    try {  
      const removedProd = await Cart.remove();
      res.status(200).json(removedProd);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };

  const getAll = async(req,res)=>{
    try {
        const userdata = await Cart.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
  }

const totPrice = async(req, res) => {
  try {
    const userdata = await Cart.find();
    //total = total + userdata.price;
    res.status(201).json(userdata.map((element, id) => {
      return(
        element.buyingQty * element.price
      )
    }))
    // console.log(userdata.price * userdata.buyingQty);
  } catch (error) {
    res.status(201).json(error);
  }
}

module.exports = {
    addToCart,
    increase,
    decrease,
    deleteCart,
    getAll,
    totPrice
};