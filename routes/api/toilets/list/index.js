var express= require('express');
var router= express.Router();
var allList= require('./all').route;

router.use('/all',allList);

module.exports.route = router;