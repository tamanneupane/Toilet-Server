const express = require('express');
const logger = require('./utils/logger');
const database = require('./utils/database');
const  bodyParser= require('body-parser');
var config = require('config').get('toilet');

var allRoutes = require('./routes').route

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/test', function(req, res) {
    res.send('Welcome to toilet server for this time');
})

app.get('/testing', function(req, res) {
    res.send('Welcome to toilet server for this time');
})

app.use('/', allRoutes);

app.listen(config.server.port, function() {
    logger.debug('listening on '+config.server.port);
})

