var express = require("express");
var router = express.Router();
const stock=require("./stock");

router.use("/stock",stock);

module.exports = router;