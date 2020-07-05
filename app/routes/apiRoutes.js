const routes = require('express').Router();
const path = require('path');
const data = require('../data/friends.json');
const Friend = require('./Friend');

routes.get('/api/friends', function(req, res){
    const friends = data;
    res.status(200).json({friends});
})

routes.post('/api/test', function(req, res){
    res.send(req.body);
})

routes.post('/api/friends', function(req, res){
    
    friendRequest = new Friend(req.body);

    let friends = [];
    
    data.forEach(function(candidate){
        let possibleFriend = new Friend(candidate);
        possibleFriend.calculateRelativeScore(friendRequest.scores);
        friends.push(possibleFriend);
    });

    friends.sort(function(a, b){
        return a.relativeScore - b.relativeScore;
    });


    
    res.send(friends[0]);
    res.end();


});


function compareNumbers(a, b) {
    return  a.totalScore - b.totalScore;
}

module.exports = routes;