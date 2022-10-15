const express = require("express");
const router = express.Router();
const { 
    addMsg,
    getMsg,
    getsingleMsg,
    updateMsg,
    removeMsg
 } = require("../controllers/MessageController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getMsg);

//@route POST api/ads
//@desc Add an ads
router.post("/", addMsg);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateMsg);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeMsg);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleMsg);

module.exports = router;
