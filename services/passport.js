const passport = require("passport"),
      // adding passport startegy
      googleStrategy = require("passport-google-oauth20").Strategy,
      // adding keys
      keys = require("../config/keys");

// Passport config
passport.use(
    new googleStrategy(
        {
            clientID : keys.googleClientID,
            clientSecret : keys.googleClientSecret,
            callbackURL : "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(refreshToken);
            console.log(profile);
        }
    )
);
