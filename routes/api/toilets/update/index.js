var express= require('express');
var router= express.Router();
var v1Update= require('./v1').route;

router.use('/v1',v1Update);

module.exports.route = router;