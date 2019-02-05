//Main route file for each routes

const express = require("express");
const router = express.Router();
const stock = require("./stock");
const user = require("./user");
const group = require("./group");
const groupchat = require("./groupchat");
const users = require("./users");
const people = require("./people");
const privatechat = require("./privatechat");
const companies = require("./companies");
const news = require("./news");

router.use("/stock", stock);
router.use("/user", user);
router.use("/group", group);
router.use("/groupchat", groupchat);
router.use("/users", users);
router.use("/people", people);
router.use("/privatechat", privatechat);
router.use("/companies", companies);
router.use("/news", news);

module.exports = router;
