const express = require('express');
const logger = require('./utils/logger');
const database = require('./utils/database');
var config = require('config').get('toilet');

var allRoutes = require('./routes').route

const app = express();

app.get('/test', function(req, res) {
    res.send('Welcome to toilet server');
})

app.use('/', allRoutes);

app.listen(config.server.port, function() {
    logger.debug('listening on '+config.server.port);
})

