const express = require("express");
const router = express.Router();
const { 
    addCom,
    getCom,
    getsingleCom,
    updateCom,
    removeCom
 } = require("../controllers/ComplaintsController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getCom);

//@route POST api/ads
//@desc Add an ads
router.post("/", addCom);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateCom);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeCom);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleCom);

module.exports = router;
