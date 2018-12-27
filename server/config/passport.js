var passport = require("passport");
var localSignUp = require("./passportStrategies/localSignUp");
const googleLogin = require("./passportStrategies/googleLogin");
const facebookLogin = require("./passportStrategies/facebookLogin");
var User = require("../models/users");

// =========================================================================
// passport session setup ==================================================
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// using configured strategies
localSignUp(passport);
googleLogin(passport);
facebookLogin(passport);
