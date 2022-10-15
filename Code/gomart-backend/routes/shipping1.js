const express = require("express");
const router = express.Router();
const { 
    addshipping,
    getshipping,
    getsingleshipping,
    updateshipping,
    removeshipping
 } = require("../controllers/shippingContraller");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getshipping);

//@route POST api/ads
//@desc Add an ads
router.post("/", addshipping);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateshipping);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeshipping);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleshipping);

module.exports = router;
