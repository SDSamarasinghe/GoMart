const AppUser = require("../models/UserModel");

const registerUser = (req, res) => {
  const {
    full_name,
    email,
    password
} = req.body;

const newUser = new AppUser({
    full_name,
    email,
    password
});

newUser.save()
    .then((customer) => {
        res.status(200).send({status: "Customer Registered", customer});
    }).catch((err) => {
        console.log(err);
    })
};

const loginUser = async(req, res) => {
  console.log(req.body);

  if (
    !req.body.email ||
    !req.body.password ||
    req.body.password === null ||
    req.body.email === null
  ) {
    res.status(401).json({ error: "Email or Password doesn't match" });
  }

  AppUser.findOne({ email: req.body.email }, function (err, doc) {
    if (err) {
      res.status(401).json({ error: "Email or Password doesn't match" });
    } else {
      if (req.body.password === doc.password) {
        req.session.user = doc;
        res.status(200).json(doc);
      } else {
        res.status(401).json({ error: "Password doesn't match" });
      }
    }
  });
};

const currentUser = (req, res) => {
  console.log(req.session);
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ error: "User not found" });
  }
};

//update user
const updateUser = async (req, res) => {

  let UserId = req.params.id;

  const {
      FullName,
      NICNumber,
      email,
      password,
      Address
  } = req.body;

  const updateUser = {
      FullName,
      NICNumber,
      email,
      password,
      Address
  }

  const update = await AppUser.findByIdAndUpdate(UserId, updateUser)
      .then((update) => {
          res.status(200).send({status: "Customer Updated", update});
      }).catch((err) => {
          console.log(err);
      })
}

//get one user through id
const getOneUser = (req, res) => {
    
  let ID = req.params.id;

  AppUser.findById(ID)
      .then((user) => {
          res.status(200).send({status: "User Data Fetched", user});
      }).catch((err) => {
          console.log(err);
      })
}

//delete customer
const deleteUser = (req, res) => {

  let UserId = req.params.id;

  User.findByIdAndDelete(UserId)
      .then(() => {
          res.status(200).send({status: "Successfully Deleted"});
      }).catch((err) => {
          console.log(err);
      })
}

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  getOneUser,
  updateUser,
  deleteUser,
};
