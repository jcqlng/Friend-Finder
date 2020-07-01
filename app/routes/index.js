const routes = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

routes.use('/', htmlRoutes);

routes.use('/', apiRoutes);

module.exports = routes;