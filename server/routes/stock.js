require("dotenv").config();
var express = require("express");
var router = express.Router();
let yourApiKey = process.env.Alpha_Key;
let User = require("../models/users");
const alpha = require("alphavantage")({ key: "" + yourApiKey });
let userObj = null;

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

router.get("/", (req, res, next) => {
  console.log("Here inside stocks");
  let symbol_arr = JSON.parse(req.query.symbols);
  console.log(symbol_arr);
  alpha.data
    .batch(symbol_arr)
    .then(data => {
      console.log(data);
      res.json({ status: "success", message: data });
    })
    .catch(err => res.json({ status: "failed", message: err }));
});

module.exports = router;
