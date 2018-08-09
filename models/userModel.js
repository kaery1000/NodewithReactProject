const mongoose = require("mongoose");

// add schema porperties
const userScehma = new mongoose.Schema ({
    googleId : String,
    username : String
});


mongoose.model("users", userScehma);
