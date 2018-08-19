const express = require('express');
const logger = require('./utils/logger');
var config = require('config').get('toilet');

const app = express();

app.get('/test', function(req, res) {
    res.send('Welcome to toilet server')
})

app.listen(config.server.port, function() {
    logger.debug('listening on '+config.server.port)
})

