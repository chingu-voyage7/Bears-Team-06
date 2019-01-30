const express = require("express");
const router = express.Router();
const User = require("../models/users");

//==================
//FULL ROUTE
//api/people/...
//==================

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res
        .status(400)
        .send({ message: "The user with provided id does not exist" });
    res.status(200).send(user);
  } catch (error) {}
});

//Find people
router.get("/find/:searchText", async (req, res) => {
  console.log("Find people have been called", req.params.searchText);
  const regex = `^${req.params.searchText}`;
  try {
    const people = await User.find({
      "local.username": { $regex: regex, $options: "i" },
    });
    console.log(people);
    res.status(200).send(people);
  } catch (err) {
    console.log(err);
  }
});
router.get("/find-all/:skip/:limit", async (req, res) => {
  try {
    const skipNumber = parseInt(req.params.skip);
    const limitNumber = parseInt(req.params.limit);
    console.log("Find all have been called", limitNumber);
    const users = await User.find({})
      .skip(skipNumber)
      .limit(limitNumber);

    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(400).send({ eroor: "Oops some error has occured" });
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
module.exports = router;
