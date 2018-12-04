//Main route file for each routes

var express = require("express");
var router = express.Router();
const stock = require("./stock");
const user = require("./user");
const group = require("./group");
const groupchat = require("./groupchat");

router.use("/stock", stock);
router.use("/user", user);
router.use("/group", group);
router.use("/groupchat", groupchat);

module.exports = router;
