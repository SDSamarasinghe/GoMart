const Prod = require("../models/AddProductModel");

const addProd = (req, res) => {
  const {
    name,
    brand,
    category,
    image,
    price,
    smallDes,
  } = req.body;

  const newPR = new Prod({
    name,
    brand,
    category,
    image,
    price,
    smallDes,
  });

  newPR
    .save()
    .then((createdProd) => {
      res.json(createdProd);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getProd = async (req, res) => {
  try {
    const prd = await Prod.find();
    res.json(prd);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleProd = async (req, res) => {
  try {
    const id = req.params.id;
    const pr = await Prod.findById(id);
    res.status(200).json(pr);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProd = async (req, res) => {
  const prvID = req.params.id;
  try {
    const id = await Prod.findById(prvID);

    if (!id) {
      return res.status(404).json("There is no Product");
    }

    const {
      name,
      brand,
      category,
      image,
      price,
      smallDes,
      
    } = req.body;
    const adsr = await Prod.findByIdAndUpdate(prvID, {
      name,
      brand,
      category,
      image,
      price,
      smallDes,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeProd = async (req, res) => {
  const prID = req.params.id;

  try {
    const pr = await Prod.findById(prID);
    if (!pr) {
      return res.status(404).json("There is no Product to remove");
    }

    const removedProd = await Prod.findByIdAndDelete(prID);
    res.status(200).json(removedProd);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addProd,
  getProd,
  getsingleProd,
  updateProd,
  removeProd,
};
