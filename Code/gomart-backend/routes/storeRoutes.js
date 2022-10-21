const express = require("express");
const {
  fetchAllProducts,
  createProduct,
  createDelivey,
  fetchProductsByCategory,
  getSingleItem,
  deleteProduct,
  updateProduct,
  createOrder,
  createPayment,
  getSingleOrder,
  getOrders,
  deleteOrder,
  getPayments,
  //StoreOrderEdit,
} = require("../controllers/storeControllers");

const router = express.Router();

router.get("/products", fetchAllProducts);
router.post("/products", createProduct);
router.get("/products/:category", fetchProductsByCategory);
router.put("/products/:pid", updateProduct);
router.delete("/products/:pid", deleteProduct);
router.get("/product/:pid", getSingleItem);
router.post("/orders", createOrder);
router.get("/orders", getOrders);
router.get("/order/:id", getSingleOrder);
router.delete("/orders/:oid", deleteOrder);
//router.put("/orders/:id", StoreOrderEdit);

router.post("/delivery", createDelivey);

router.post("/payment", createPayment);
router.get("/payments", getPayments);

module.exports = router;
