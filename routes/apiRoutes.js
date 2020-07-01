const routes = require('express').Router();
const path = require('path');

routes.get('/api/friends', function(req, res){
    res.status(200).json({message: "all my friends"});
})


module.exports = routes;