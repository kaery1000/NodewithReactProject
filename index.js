const express = require("express"),
        app = express();
        //adding the passport file
        require("./services/passport");
        
//import the route and pass the app to the function    
require("./routes/authRoute")(app);

// import Index routes
require("./routes/indexRoute")(app);

app.listen(process.env.PORT, process.env.IP , () => {
    console.log("The server has started");
});