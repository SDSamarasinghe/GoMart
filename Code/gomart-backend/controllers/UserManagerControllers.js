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
  let UserName = req.body.email;
    let Password = req.body.password;

    await AppUser.findOne({email: UserName}).then((data) => {
        if(data){
            if(data.password == Password){
                res.status(200).send({status: "Login Successfully", data});
            }else{
                res.send({status: "Incorrect Password"});
            }
        }else{
            res.send({status: "User does not exists"});
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
      FirstName,
      LastName,
      NICNumber,
      email,
      password,
      Address
  } = req.body;

  const updateUser = {
      FirstName,
      LastName,
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
  updateUser,
  deleteUser,
};
