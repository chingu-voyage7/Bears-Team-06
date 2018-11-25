require("dotenv").config();
var express = require("express");
var router = express.Router();
let yourApiKey = process.env.Alpha_Key;
const alpha = require("alphavantage")({ key: ""+yourApiKey });

router.get("/", (req, res, next) => {
  console.log("Here");
  alpha.data.batch([`msft`, `aapl`]).then(data => {
    console.log(data);
  });
});

module.exports = router;