var express = require('express')
var router = express.Router()
var {ToiletModel,addToilet}= require('../../../../../models/toilet/ToiletModel')

router.get('/', function(req, res){
    res.send("get API add v1 working perfectly");
});

router.post('/',(req,res)=>{
	var toilet = req.body

	var toiletResponse = {
		contributor : toilet.contributor,
		name : toilet.name,
		location : {
			type : 'Point',
			coordinates : [toilet.latitude , toilet.longitude]
		},
		rating : [],
		report : []
	}

	var toiletModel = ToiletModel(toiletResponse)

	addToilet(toiletModel,(err,toilet)=>{
		if(err){
			res.send({
				status : "error",
				message : err
			})
		}
		res.send({
			status : "success",
			response : toilet
		})

	})
});

module.exports.route = router;
