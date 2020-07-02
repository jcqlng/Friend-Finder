const routes = require('express').Router();
const path = require('path');
const data = require('../data/friends.json');

routes.get('/api/friends', function(req, res){
    const friends = data;
    res.status(200).json({friends});
})

routes.post('/api/friends', function(req, res){

});


module.exports = routes;