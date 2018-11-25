require("dotenv").config();
var express = require("express");
var router = express.Router();
let yourApiKey = process.env.Alpha_Key;
const alpha = require("alphavantage")({ key: "" + yourApiKey });

router.get("/", (req, res, next) => {
  console.log("Here");
  alpha.data
    .batch([`msft`, `aapl`])
    .then(data => {
      console.log(data);
      res.json({ status: "success", message: data });
    })
    .catch(err => res.json({ status: "failed", message: err }));
});

module.exports = router;
