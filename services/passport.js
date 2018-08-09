const passport = require("passport"),
    // adding passport startegy
    googleStrategy = require("passport-google-oauth20").Strategy,
    // adding keys
    keys = require("../config/keys"),
    // adding User model
    User = require("../models/userModel");

// Passport config
passport.use(
    new googleStrategy(
        {
            clientID : keys.googleClientID,
            clientSecret : keys.googleClientSecret,
            callbackURL : "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            // creating a user model instance and saving to MongoDB
            new User ({googleId : profile.id, username : profile.displayName}).save();
        }
    )
);
