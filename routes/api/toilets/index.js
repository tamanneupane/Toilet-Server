var express= require('express');
var router= express.Router();
var listRoute= require('./list').route;
var addRoute= require('./add').route;
var deleteRoute= require('./delete').route;
var updateRoute= require('./update').route;

router.use('/list',listRoute);

router.use('/add',addRoute);

router.use('/delete',deleteRoute);

router.use('/update',updateRoute);

module.exports.route = router;