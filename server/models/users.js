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
    email: { type: String, sparse: true },
  },

  age: { type: Number, default: 0 },
  location: { type: String, default: "" },
  gender: { type: String, default: "" },
  bio: { type: String, default: "" },
  userImage: {
    type: String,
    default:
      "https://res.cloudinary.com/samrat/image/upload/finance/default.png",
  },
  facebook: { type: String, sparse: true },
  fbTokens: Array,
  google: { type: String, sparse: true },
  totalRequest: {
    type: Number,
  },
  // companies: [
  //   {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     symbol: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  companies: {
    type: Array,
    default: [
      {
        name: "Apple Inc.(NAS)",
        symbol: "AAPL",
      },
      {
        name: "Tata Motors Limited(NYQ)",
        symbol: "TTM",
      },
    ],
  },
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
