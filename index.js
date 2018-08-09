const express = require("express"),
        app = express(),
        // adding mongoose
        mongoose = require("mongoose"),
        // importing keys
        keys = require("./config/keys");
        
        
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