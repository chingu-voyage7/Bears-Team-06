var express = require("express");
var router = express.Router();
var cloudinary = require("cloudinary");
const Users = require("../models/users");
let multer = require("multer");
let upload = multer();

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

router.post(
  "/image/:username",
  upload.single("userImage"),
  async (req, res) => {
    try {
      console.log("posting");
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      console.log(req.body);
      const result = await cloudinary.uploader.upload(req.body.userImage, {
        crop: "limit",
        tags: "samples",
        width: 3000,
        height: 2000,
      });
      console.log(result);
      const info = await Users.updateOne({
        "local.username": req.params.username,
      }).set({ userImage: req.body.userImage });
      res.status(200).send(info);
    } catch (err) {
      console.log("error");
      console.log(err);
    }
  },
);

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
