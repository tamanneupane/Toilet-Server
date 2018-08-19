var express= require('express');
var router= express.Router();
var v1Add= require('./v1').route;

router.use('/v1',v1Add);

module.exports.route = router;