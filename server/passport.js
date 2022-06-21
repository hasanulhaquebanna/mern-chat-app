const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { CLIENTID, CLIENTSECRET, CLIENTURL } = require("./env");

app.use(
  new GoogleStrategy({
    clientID: CLIENTID,
    clientSecret: CLIENTSECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"],
  }),
  function (accesToken, refreshToken, profile, callback) {
    callback(null, profile);
  }
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
