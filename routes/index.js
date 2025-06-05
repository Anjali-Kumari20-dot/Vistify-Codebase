var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");
const localStrategy = require("passport-local");
const passport = require("passport");
passport.use(new localStrategy(userModel.authenticate()));

router.get("/", function (req, res, next) {
  res.render("index", );
});

router.get("/login", function(req, res, next){
  res.render('login', {title: "Login Page", error: req.flash('error')} );
})

router.get('/profile', isLoggedIn, function(req, res, next){
  res.render("profile")
})

router.get('/feed', function(req, res, next){
  res.render("feed");
})

router.post("/register", function (req, res) {
  const { username, email, fullname } = req.body;
  const userdata = new userModel({ username, email, fullname });

  userModel.register(userdata, req.body.password).then(function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/profile");
    });
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true
  }),
  function (req, res) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}
module.exports = router;
