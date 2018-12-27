const express = require("express");
const router = express.Router();
const User = require("../models/users");

//==================
//FULL ROUTE
//api/people/...
//==================
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
