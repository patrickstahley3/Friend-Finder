var path = require('path');

module.exports = function(app) {
 
    app.get("./routing/home", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/home.html"));
    });   
    
    app.get("./routing/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/survey.html"));
    });
}

