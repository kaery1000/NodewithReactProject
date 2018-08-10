const express = require("express"),
        app = express(),
        // adding mongoose
        mongoose = require("mongoose"),
        // add cookie
        cookieSession = require("cookie-session"),
        passport = require("passport"),
        // importing keys
        keys = require("./config/keys");
        
        
// cookie session config
app.use(
    cookieSession({
        maxAge : 30 * 24 *60 * 60 *1000, //30 days in ms
        keys : [keys.cookieKey]
    }) 
);

// passport cookie config
app.use(passport.initialize());
app.use(passport.session());
        
// importing user model
require("./models/userModel");
// importing passprot
require("./services/passport");

// MongoDB config
mongoose.connect(keys.mongoURI, {useNewUrlParser : true});

//import the route and pass the app to the function    
require("./routes/authRoute")(app);

// import Index routes
require("./routes/indexRoute")(app);

app.listen(process.env.PORT, process.env.IP , () => {
    console.log("The server has started");
});