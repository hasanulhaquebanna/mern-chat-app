const passport = require("passport");

module.exports = passport.authenticate("google", {
  successRedirect: CLIENTURL,
  failureRedirect: "/login/failed",
});
