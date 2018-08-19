var express= require('express');
var router= express.Router();
var toiletRoutes= require('./toilets').route;

router.use('/toilets',toiletRoutes);

module.exports.route = router;