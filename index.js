const express = require("express"),
        app = express(),
        // adding passport
        passport = require("passport"),
        // adding passport startegy
        googleStrategy = require("passport-google-oauth20").Strategy,
        // adding keys
        keys = require("./config/keys");
        
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


app.get(
    "/auth/google",
    passport.authenticate ("google", {
        scope : ["profile", "email"]
    })
);
app.get("/auth/google/callback", passport.authenticate("google"));


app.listen(process.env.PORT, process.env.IP , () => {
    console.log("The server has started");
});