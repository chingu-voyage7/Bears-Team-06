require("dotenv").config();
var express = require("express");
var router = express.Router();
let yourApiKey = process.env.Alpha_Key;
let User = require("../models/users");
const alpha = require("alphavantage")({ key: "" + yourApiKey });
let userObj = null;

//This would be the default route through which all routes go
//It checks if the user is already logged in, while using the below routes
router.use(function(req, res, next) {
	//get the user details from current session
	User.findById(req.session.passport.user, function(err, user) {
		userObj = user;
	})
		.then(r => {
			next();
		})
		.catch(err => next(err));
});

//When get is called on '/' :- api/stocks, then this route executes
//Returns the current status of the batches of symbols
router.get("/", (req, res, next) => {
  console.log("Here inside stocks");
  let symbol_arr = JSON.parse(req.query.symbols);
  console.log(symbol_arr);
  alpha.data
    .intraday(symbol_arr)
    .then(data => {
      console.log(data);
      res.json({ status: "success", message: data });
    })
    .catch(err => res.json({ status: "failed", message: err }));
});

//Returns the stats for the symbol
router.get("/stats", (req, res, next) => {
  console.log("Here inside stock-info");
  let symbol = JSON.parse(req.query.symbol);
  console.log(symbol);
  alpha.data
    .intraday(symbol,"compact","json","15min")
    .then(data => {
      console.log(data);
      res.json({ status: "success", message: data });
    })
    .catch(err => res.json({ status: "failed", message: err }));
});

//Return the details for quote
router.get("/quote", (req, res, next) => {
  console.log("Here inside quote");
  let symbol = JSON.parse(req.query.symbol);
  console.log(symbol);
  alpha.data
    .quote(symbol,"compact","json")
    .then(data => {
      console.log(data);
      res.json({ status: "success", message: data });
    })
    .catch(err => res.json({ status: "failed", message: err }));
});

module.exports = router;
