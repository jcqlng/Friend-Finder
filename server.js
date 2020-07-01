const express = require('express');
const path = require('path');
const routes = require('./app/routes');
const app = express();

app.use(express.static('app/public'));

app.use('/', routes);

app.listen(4000, function(){
    console.log("Listening on port 4000!")
});