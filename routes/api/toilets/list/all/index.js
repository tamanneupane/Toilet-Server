var express= require('express');
var router= express.Router();
var v1Route= require('./v1').route;

router.use('/v1',v1Route);

module.exports.route = router;