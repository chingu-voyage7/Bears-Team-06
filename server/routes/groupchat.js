const User = require("../models/users");
const GroupMessage = require("../models/groupmessage");

var express = require("express");
var router = express.Router();

//==================
//FULL ROUTE
//api/groupchat/..
//==================

//Save a group message
router.post("/save-message", async (req, res) => {
  console.log("Save group message route is called");
  try {
    const group = new GroupMessage();
    group.sender = req.user._id;
    group.body = req.body.message;
    group.name = req.body.groupname;
    await group.save();
    res.status(200).send();
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

//Get Group Chat messages
router.get("/messages/:groupname", async (req, res) => {
  console.log("Group chat messages is called");
  try {
    const groupmessages = await GroupMessage.find({
      name: req.params.groupname
    }).populate("sender");
    res.status(200).send(groupmessages);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
