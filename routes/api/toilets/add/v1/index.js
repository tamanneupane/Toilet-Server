var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.send("API add v1 working perfectly");
});

router.post('/',(req,res)=>{
   	console.log(req.body);
	res.send("received")
});


module.exports.route = router;
