var path = require('path');

// pull in the friends variable data file
var newFriends = require('../data/friends.js');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(newFriends);
    });

    app.post('/api/friends', function (req, res) {
        var surveyResults = req.body.scores;
        res.send(newFriends[bestMatch]);

        for (var i = 0; i < surveyResults.length; i++) {
            surveyResults[i] = parseInt(surveyResults[i]);
        };
        
        var mainDifference = 999999;
        var bestMatch = 0;

        var tempDIfference = difference(surveyResults, newFriends[i].scores);

        if(tempDIfference < mainDifference) {
            mainDifference = tempDIfference;
            bestMatch = i;

        };

    });
}
function difference(array1, array2) {

    var differenceAmount = 0;

    for (var i = 0; i < array1.length; i++) {
        differenceAmount += Math.abs(array1[i] - array2[i]);
    }
    return differenceAmount;

};
