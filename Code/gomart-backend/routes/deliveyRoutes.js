const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  createDelivey,
  fetchProductsByCategory,
  getSingleItem,
  
} = require("../controllers/deliveryControllers");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.post("/products", createProduct);
router.get("/products/:category", fetchProductsByCategory);
router.put("/products/:pid", updateProduct);
router.delete("/products/:pid", deleteProduct);


router.post("/delivery", createDelivey);

router.post("/payment", createPayment);
router.get("/payments", getPayments);

module.exports = router;
