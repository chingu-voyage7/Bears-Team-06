var passport = require("passport");
var express = require("express");
var router = express.Router();

//function to check if the user is already logged in or not
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    console.log("You are not logged in!");
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    res.json({ success: false, status: "You are not logged in!" });
  }
}

//Default get page:- Only for demo purpose
router.get("/", function(req, res, next) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    status: "You are in / page!"
  });
});

//Route for login:- uses passport local login strategy
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

//Route for signup:- uses passport local-signup strategy
router.post("/signup", function(req, res, next) {
  passport.authenticate("local-signup", function(err, user, info) {
    if (err) {
      console.log(err);
      return next(err);
    }
    if (user) {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: "You have successfully signed up!"
        });
        return;
      });
    } else {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.json({ success: false, status: info.message });
    }
  })(req, res, next);
});

//Route for user logout
router.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    req.session.destroy();
    res.clearCookie("connect.sid"); // clean up session info from client-side
    return res.json({ msg: "logging you out" });
  } else {
    return res.json({ msg: "no user to log out!" });
  }
});

router.post("/change_password", isLoggedIn, function(req, res, next) {
  var user = req.user;
  // checking if don't have current local password or provided password is valid
  if (!user.local.password || user.validPassword(req.body.oldPassword)) {
    // if true - assign new password
    user.local.password = user.generateHash(req.body.password);
    user.save().then(
      user => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: "Password successfully changed"
        });
        return;
      },
      err => {
        console.log(err);
        return next(err);
      }
    );
    // if not valid - send error message
  } else {
    res.statusCode = 401;
    res.setHeader("Content-Type", "application/json");
    return res.json({ success: false, status: "Wrong password" });
  }
});

module.exports = router;
