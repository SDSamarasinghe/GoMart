const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  updateUser,
  deleteUser,
} = require("../controllers/UserManagerControllers");

const router = express.Router();

router.post("/sign-up", registerUser);
router.post("/login", loginUser);
router.get("/current", currentUser);

//update user
router.put("/updateUser/:id", updateUser);

//delete user
router.delete("/deleteUser", deleteUser);


module.exports = router;
