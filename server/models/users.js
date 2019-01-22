// load the things we need
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

// define the schema for our user model
var userSchema = mongoose.Schema({
  name: String,
  local: {
    username: String,
    password: {
      type: String,
      sparse: true,
    },
    email: String,
  },
  age: { type: Number, default: 0 },
  location: { type: String, default: "" },
  gender: { type: String, default: "" },
  bio: { type: String, default: "" },
  userImage: { type: String, default: null },
  facebook: { type: String, sparse: true },
  fbTokens: Array,
  google: { type: String, sparse: true },
  totalRequest: {
    type: Number,
  },
  companyFollowing:[]
});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("users", userSchema);
