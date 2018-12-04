const Group = require("../models/groups");
const _ = require("lodash");
var express = require("express");
var router = express.Router();

//==================
//FULL ROUTE
//api/group/...
//==================

router.get("/get-group/:name", async (req, res) => {
  try {
    const group = await Group.findOne({ name: req.params.name });
    if (group) {
      return res.status(200).send(group);
    }
    return res
      .status(400)
      .send({ msg: "The Group with provided name does not exist" });
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Some error occured on the server" });
  }
});

//Returns all the chat groups
router.get("/all-groups", async (req, res) => {
  try {
    const groups = await Group.find({});
    res.status(200).send(groups);
  } catch (err) {
    res.status(401).send({ message: "Some error occured", err });
  }
});

router.post("/create", async (req, res) => {
  console.log("On create chat group on server is caleld");
  if (!req.body.name)
    return res.status(400).send({ message: "Please provide some name" });

  const group = await Group.findOne({ name: req.body.name });
  if (group) {
    return res
      .status(400)
      .send({ message: "Group with provided name already exist" });
  }
  const newGroup = new Group({
    name: req.body.name,
    country: req.body.country,
    image: req.body.image,
    createdBy: req.user.id
  });
  console.log(newGroup);
  try {
    await newGroup.save();
    res.status(200).send({ message: "Image is successfully created" });
  } catch (error) {
    console.log("This errors is from admin.js file");
    console.log(error);
  }
});

router.get("/get-group/:id", async (req, res) => {
  try {
    //checking if the group is the one actually created by the user
    const group = await Group.findById(req.params.id);
    if (!group.createdBy.equals(req.user.id)) {
      return res.status(400).send({ msg: "This is not the group you created" });
    }

    if (group) {
      return res.status(200).send(group);
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
});

module.exports = router;
