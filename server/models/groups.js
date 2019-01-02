const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("groups", groupSchema);
