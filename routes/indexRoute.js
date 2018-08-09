module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("this is the home page");
    });
};