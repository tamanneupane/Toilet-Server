var express= require('express');
var router= express.Router();
var v1Delete= require('./v1').route;

router.use('/v1',v1Delete);

module.exports.route = router;