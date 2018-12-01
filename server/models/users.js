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
      sparse: true
    },
    email: String
  },
  userImage: { type: String, default: "default.png" },
  facebook: { type: String, sparse: true },
  fbTokens: Array,
  google: { type: String, sparse: true },
  sentRequest: [
    {
      username: { type: String }
    }
  ],
  requests: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
    }
  ],
  friendsList: [
    {
      friendId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

      //Notifies the user whether they have read the message called
      //friend request is accepted
      readBy: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
          }
        }
      ]
    }
  ],
  totalRequest: {
    type: Number
  }
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
module.exports = mongoose.model("User", userSchema);
