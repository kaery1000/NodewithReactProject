const passport = require("passport"),
    // adding passport startegy
    googleStrategy = require("passport-google-oauth20").Strategy,
    // adding keys
    keys = require("../config/keys"),
    // add ongoose
    mongoose = require("mongoose");
    
//add user model 
const User = mongoose.model("users");

// serialize 
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserialize 
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

// Passport config
passport.use(
    new googleStrategy(
        {
            clientID : keys.googleClientID,
            clientSecret : keys.googleClientSecret,
            callbackURL : "/auth/google/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id}).then(existingUser => {
                if(existingUser) {
                    //already record exists
                    //call done and pass args that error is null
                    done(null, existingUser);
                } else {
                    // creating a user model instance and saving to MongoDB
                    new User({googleId : profile.id, username : profile.displayName})
                    .save()
                    .then(user => done(null, user));
                    
                }
            });
        }
    )
);
