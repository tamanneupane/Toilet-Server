var express= require('express');
var router= express.Router();
var listRoute= require('./list').route;
var addRoute= require('./add').route;
var deleteRoute= require('./delete').route;
var deleteRoute= require('./update').route;

router.use('/list',listRoute);

router.use('/add',addRoute);

router.use('/delete',deleteRoute);

router.use('/update',deleteRoute);

module.exports.route = router;