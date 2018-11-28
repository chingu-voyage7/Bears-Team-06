var passport = require("passport");
var express = require("express");
var router = express.Router();

router.post("/login", function(req, res, next) {
    passport.authenticate("local-login", function(err, user, info) {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (user) {
        req.logIn(user, function(err) {
          if (err) {
            console.log(err);
            return next(err);
          }
  
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            success: true,
            status: "You have successfully signed in!"
          });
          return;
        });
      } else {
        res.statusCode = 401;
        res.setHeader("Content-Type", "application/json");
        res.json({ success: false, status: info.message });
        return;
      }
    })(req, res, next);
  });