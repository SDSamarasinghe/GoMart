const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AppUserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  NICNumber: {
    type: String,
    // required: true
  },

  email: {
      type: String,
      required: true,
      unique: true,
  },

  password: {
      type: String,
      required: true,
  },

  Address: {
      type: String,
      // required: true
  },

},
{
  timestamps: true,
});

//encrypt the password
AppUserSchema.pre('save', async function (next) {
if(!this.isModified('password')) {
    next();
}

const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
});

//decrypt and compare password
AppUserSchema.methods.matchPassword = async function (enteredPassword) {
return await bcrypt.compare(enteredPassword, this.password);
};

const AppUser = mongoose.model("AppUser", AppUserSchema);

module.exports = AppUser;
