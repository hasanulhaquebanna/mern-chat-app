const router = require("express").Router();
const passport = require("passport");

const googleCallBack = require("../controllers/auth/googleCallBack");
const loginFailed = require("../controllers/auth/loginFailed");
const { CLIENTURL } = require("../env");

// passprort with oauth20
router.get("/login/success");
router.get("/goggle/callback", googleCallBack);
router.get("/login/failed", loginFailed);
router.get("/goggle", passport.authenticate("google", ["profile", "email"]));
router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENTURL);
});

module.exports = router;
