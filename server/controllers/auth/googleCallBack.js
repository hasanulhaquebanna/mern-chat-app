const passport = require("passport");
const { CLIENTURL } = require("../../env");

module.exports = passport.authenticate("google", {
  successRedirect: CLIENTURL,
  failureRedirect: "/login/failed",
});
