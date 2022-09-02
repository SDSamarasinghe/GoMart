const express = require("express");
const router = express.Router();
const { 
  addFB,
  getFB,
  getsingleFB,
  updateFB,
  removeFB
 } = require("../controllers/FeedbackController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getFB);

//@route POST api/ads
//@desc Add an ads
router.post("/", addFB);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateFB);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeFB);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleFB);

module.exports = router;
