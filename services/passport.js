const passport = require("passport"),
    // adding passport startegy
    googleStrategy = require("passport-google-oauth20").Strategy,
    // adding keys
    keys = require("../config/keys"),
    // add ongoose
    mongoose = require("mongoose");
    
//add user model 
const User = mongoose.model("users");

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
            console.log(profile.id);
            console.log(profile.displayName);
            new User({googleId : profile.id, username : profile.displayName}).save();
        }
    )
);
