var express = require("express");
var path = require("path");
var data = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 8080;

// Routes
app.get("/survey", function (req, res) {
    return res.sendFile(path.join(__dirname, "/./app/public/survey.html"));
});

app.get("/", function (req, res) {
    console.log("Testing");
    return res.sendFile(path.join(__dirname, "/./app/public/home.html"));
});

app.get("/api/friends", function(req, res) {
    return res.json(data);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});