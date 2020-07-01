const routes = require('express').Router();
const path = require('path');
const publicDir = __dirname.replace('routes', 'public');

routes.get('/', function(req, res){
  
    res.status(200).sendFile(path.join( publicDir, 'home.html'), function(err){
      if(err) console.log(err);
      res.status(404);
    });
  });

routes.get('/survey', function(req, res){
    res.sendFile(path.join(publicDir, 'survey.html'), function(err){
        if(err) console.log(err);
        res.status(404);
    })
})

module.exports = routes;
