const Feedback = require("../models/FeedbackModel");

const addFB = (req, res) => {
  const {
    fname,
    lname,
    date,
    email,
    pro_qua_fb,
    deli_dri_rate,
    deli_tme_rate,
    recommendation,
    suggestions,
  } = req.body;

  const newFB = new Feedback({
    fname,
    lname,
    date,
    email,
    pro_qua_fb,
    deli_dri_rate,
    deli_tme_rate,
    recommendation,
    suggestions,
  });

  newFB
    .save()
    .then((createdFB) => {
      res.json(createdFB);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getFB = async (req, res) => {
  try {
    const fb = await Feedback.find();
    res.json(fb);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleFB = async (req, res) => {
  try {
    const id = req.params.id;
    const feed = await Feedback.findById(id);
    res.status(200).json(feed);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateFB = async (req, res) => {
  const fbID = req.params.id;
  try {
    const id = await Feedback.findById(fbID);

    if (!id) {
      return res.status(404).json("There is no Feedback");
    }

    const {
        fname,
        lname,
        date,
        email,
        pro_qua_fb,
        deli_dri_rate,
        deli_tme_rate,
        recommendation,
        suggestions,
      
    } = req.body;
    const adsr = await Feedback.findByIdAndUpdate(fbID, {
        fname,
        lname,
        date,
        email,
        pro_qua_fb,
        deli_dri_rate,
        deli_tme_rate,
        recommendation,
        suggestions,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeFB = async (req, res) => {
  const fID = req.params.id;

  try {
    const fb = await Feedback.findById(fID);
    if (!fb) {
      return res.status(404).json("There is no Feedback to remove");
    }

    const removeFB = await Feedback.findByIdAndDelete(fID);
    res.status(200).json(removeFB);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addFB,
  getFB,
  getsingleFB,
  updateFB,
  removeFB,
};
