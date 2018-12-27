var express = require("express");
var router = express.Router();
const Users = require("../models/users");

router.get("/:username", async (req, res) => {
  try {
    const user = await Users.findOne({
      "local.username": req.params.username,
    });
    if (user) {
      res.status(200).send(user);
    } else {
      res
        .status(400)
        .send({ msg: "The User with provided username does not exist" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Could not get user info" });
  }
});

router.put("/:username", async (req, res) => {
  try {
    const info = await Users.updateOne({
      "local.username": req.params.username,
    }).set(req.body);
    res.status(200).send(info);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Could not update user info" });
  }
});

module.exports = router;
