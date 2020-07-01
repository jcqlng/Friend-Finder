const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();

app.use(express.static('public'));

app.use('/', routes);

app.listen(4000, function(){
    console.log("Listening on port 4000!")
});