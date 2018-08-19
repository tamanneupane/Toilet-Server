var express= require('express');
var router= express.Router();
var apiRoute= require('./api').route;

router.use('/api',apiRoute);

module.exports.route = router;
