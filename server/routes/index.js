//Main route file for each routes

var express = require("express");
var router = express.Router();
const stock = require("./stock");
const user = require("./user");
const group = require("./group");
const groupchat = require("./groupchat");
const users = require("./users");
const people = require("./people");
const privatechat = require("./privatechat");

router.use("/stock", stock);
router.use("/user", user);
router.use("/group", group);
router.use("/groupchat", groupchat);
router.use("/users", users);
router.use("/people", people);
router.use("/privatechat", privatechat);

module.exports = router;
