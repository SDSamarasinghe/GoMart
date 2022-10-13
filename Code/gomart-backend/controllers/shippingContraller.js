const shipping = require("../models/shipping");

const addshipping = (req, res) => {
  const {
        Receviver_Name,
        Receviver_Address,
        Receviver_phoneNo,
        conformation,
        payment_method,
        description,
        instruction,
  } = req.body;

  const newsp = new shipping({
    Receviver_Name,
    Receviver_Address,
    Receviver_phoneNo,
    conformation,
    payment_method,
    description,
    instruction,
  });

  newsp
    .save()
    .then((createdshipping) => {
      res.json(createdshipping);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getshipping = async (req, res) => {
  try {
    const shp = await shipping.find();
    res.json(shp);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleshipping = async (req, res) => {
  try {
    const id = req.params.id;
    const sp = await shipping.findById(id);
    res.status(200).json(sp);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateshipping = async (req, res) => {
  const shpID = req.params.id;
  try {
    const id = await shipping.findById(shpID);

    if (!id) {
      return res.status(404).json("There is no shipping details");
    }

    const {
      Receviver_Name,
    Receviver_Address,
    Receviver_phoneNo,
    conformation,
    payment_method,
    description,
    instruction,
      
    } = req.body;
    const adsr = await shipping.findByIdAndUpdate(shpID, {
      Receviver_Name,
    Receviver_Address,
    Receviver_phoneNo,
    conformation,
    payment_method,
    description,
    instruction,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeshipping = async (req, res) => {
  const spID = req.params.id;

  try {
    const sp = await shipping.findById(spID);
    if (!sp) {
      return res.status(404).json("There is no shipping details to remove");
    }

    const removedshipping = await shipping.findByIdAndDelete(spID);
    res.status(200).json(removedshipping);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addshipping,
  getshipping,
  getsingleshipping,
  updateshipping,
  removeshipping,
};
