const router = require("express").Router();
const passport = require("passport");

const googleCallBack = require("../controllers/auth/googleCallBack");
const loginFailed = require("../controllers/auth/loginFailed");
const { CLIENTURL } = require("../env");

// passprort with oauth20
router.get("/aut/login/success");
router.get("/aut/goggle/callback", googleCallBack);
router.get("/aut/login/failed", loginFailed);
router.get(
  "/aut/goggle",
  passport.authenticate("google", ["profile", "email"])
);
router.get("/aut/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENTURL);
});

module.exports = router;
