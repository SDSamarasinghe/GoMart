const Complaint = require("../models/ComplaintsModel");

const addCom = (req, res) => {
  const {
    fname,
    lname,
    date,
    email,
    category,
    Issue,
    files,
  } = req.body;

  const newCom = new Complaint({
    fname,
    lname,
    date,
    email,
    category,
    Issue,
    files,
  });

  newCom
    .save()
    .then((createdCom) => {
      res.json(createdCom);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCom = async (req, res) => {
  try {
    const com = await Complaint.find();
    res.json(com);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleCom = async (req, res) => {
  try {
    const id = req.params.id;
    const comp = await Complaint.findById(id);
    res.status(200).json(comp);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCom = async (req, res) => {
  const comID = req.params.id;
  try {
    const id = await Complaint.findById(comID);

    if (!id) {
      return res.status(404).json("There is no Complaint");
    }

    const {
      fname,
      lname,
      date,
      email,
      category,
      Issue,
      files,
      
    } = req.body;
    const adsr = await Complaint.findByIdAndUpdate(comID, {
      fname,
      lname,
      date,
      email,
      category,
      Issue,
      files,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeCom = async (req, res) => {
  const cID = req.params.id;

  try {
    const com = await Complaint.findById(cID);
    if (!com) {
      return res.status(404).json("There is no Complaint to remove");
    }

    const removeCom = await Complaint.findByIdAndDelete(cID);
    res.status(200).json(removeCom);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addCom,
  getCom,
  getsingleCom,
  updateCom,
  removeCom,
};
