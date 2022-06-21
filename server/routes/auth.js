const router = require("express").Router();
const passport = require("passport");

const googleCallBack = require("../controllers/auth/googleCallBack");
const loginFailed = require("../controllers/auth/loginFailed");
const { CLIENTURL } = require("../env");

// passprort with oauth20
router.get("/auth/login/success");
router.get("/auth/google/callback", googleCallBack);
router.get("/auth/login/failed", loginFailed);
router.get(
  "/auth/google",
  passport.authenticate("google", ["profile", "email"])
);
router.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENTURL);
});

module.exports = router;
