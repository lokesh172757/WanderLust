const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// user signup
router.route("/signup")
    .get(userController.renderSignupForm)
    .post(userController.signup);

//user login
router.route("/login").get(
    userController.renderLoginForm
).post(
    saveRedirectUrl,
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    userController.login
);

// user logout
router.get("/logout", userController.logout);
module.exports = router;