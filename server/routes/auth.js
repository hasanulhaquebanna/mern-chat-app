const router = require("express").Router();
const passport = require("passport");

const googleCallBack = require("../controllers/auth/googleCallBack");
const googleLoginFailed = require("../controllers/auth/googleLoginFailed");
const googleLoginSuccess = require("../controllers/auth/googleLoginSuccess");
const { CLIENTURL } = require("../env");

// passprort with oauth20
router.get("/auth/login/success", googleLoginSuccess);
router.get("/auth/google/callback", googleCallBack);
router.get("/auth/login/failed", googleLoginFailed);
router.get(
  "/auth/google",
  passport.authenticate("google", ["profile", "email"])
);
router.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENTURL);
});
// rest api routes
router.post("/auth/user/login", authUserLogin);

module.exports = router;
