var express = require("express");
var router = express.Router();
const stock=require("./stock");
const user=require('./user')

router.use("/stock",stock);
router.use("/user",user);

module.exports = router;