const delivery = require("../models/delivery");

const adddelivery = (req, res) => {
  const {
        driver_Name,
        Receviver_Name,
        delivery_date,
        delivery_time,
        delivery_status,
        Receviver_phoneNo,
        delivery_details,
        special_Notices,
        Date,
        signature,
  } = req.body;

  const newdl = new delivery({
    
        driver_Name,
        Receviver_Name,
        delivery_date,
        delivery_time,
        delivery_status,
        Receviver_phoneNo,
        delivery_details,
        special_Notices,
        Date,
        signature,

    });

  newdl
    .save()
    .then((createddelivery) => {
      res.json(createddelivery);
    })
    .catch((err) => {
      console.log(err);
    });
};
const createDelivey = (req, res) => {
  delivery.create(req.body, (err, data) => {
    if (err) res.status(500).json({ error: err });
    res.status(201).json(data);
  });
};
const getdelivery = async (req, res) => {
  try {
    const delivery = await delivery.find();
    res.json(delivery);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingledelivery = async (req, res) => {
  try {
    const id = req.params.id;
    const dl = await delivery.findById(id);
    res.status(200).json(dl);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateDelivery = async (req, res) => {
  const deliveryID = req.params.id;
  try {
    const id = await delivery.findById(deliveryID);

    if (!id) {
      return res.status(404).json("There is no delivery details");
    }

    const {
        driver_Name,
        Receviver_Name,
        delivery_date,
        delivery_time,
        delivery_status,
        Receviver_phoneNo,
        delivery_details,
        special_Notices,
        Date,
        signature,
      
    } = req.body;
    const adsr = await shipping.findByIdAndUpdate(deliveryID, {
        driver_Name,
        Receviver_Name,
        delivery_date,
        delivery_time,
        delivery_status,
        Receviver_phoneNo,
        delivery_details,
        special_Notices,
        Date,
        signature,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removedelivery = async (req, res) => {
  const dlID = req.params.id;

  try {
    const dl = await shipping.findById(deliveryID);
    if (!dl) {
      return res.status(404).json("There is no delivery details to remove");
    }

    const removeddelivery = await delivery.findByIdAndDelete(dlID);
    res.status(200).json(removedelivery);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


module.exports = {
  adddelivery,
  getdelivery,
  getsingledelivery,
 
  createDelivey,
  updatedelivery,
  removesdelivery,
};
