// findind out which credentials to return
if (process.env.NODE_ENV === "production") {
    // return the prod configs
    module.exports = require("./prod");
} else {
    // retunt the dev keys
    module.exports = require("./keys");
}