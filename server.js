var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// all routes - that's where we are getting our data from 
require("./routing/apiroutes.js")(app);
require("./routing/htmlroutes.js")(app);




app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)
});