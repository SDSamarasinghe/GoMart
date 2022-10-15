const Message = require("../models/MessageModel");

const addMsg = (req, res) => {
  const {
    fname,
    lname,
    email,
    message,
  } = req.body;

  const newMsg = new Message({
    fname,
    lname,
    email,
    message,
  });

  newMsg
    .save()
    .then((createdMsg) => {
      res.json(createdMsg);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getMsg = async (req, res) => {
  try {
    const msg = await Message.find();
    res.json(msg);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleMsg = async (req, res) => {
  try {
    const id = req.params.id;
    const msg = await Complaint.findById(id);
    res.status(200).json(msg);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateMsg = async (req, res) => {
  const msgID = req.params.id;
  try {
    const id = await Message.findById(msgID);

    if (!id) {
      return res.status(404).json("There is no Message");
    }

    const {
        fname,
        lname,
        email,
        message,
      
    } = req.body;
    
    const adsr = await Message.findByIdAndUpdate(msgID, {
        fname,
        lname,
        email,
        message,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeMsg = async (req, res) => {
  const mID = req.params.id;

  try {
    const msg = await Message.findById(mID);
    if (!msg) {
      return res.status(404).json("There is no Message to remove");
    }

    const removeMsg = await Message.findByIdAndDelete(mID);
    res.status(200).json(removeMsg);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
    addMsg,
    getMsg,
    getsingleMsg,
    updateMsg,
    removeMsg,
};
