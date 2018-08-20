var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var ToiletSchema= new Schema({
       contributor : {
          name : String
       },
       name: String,
       location: {
         type: {
           type: String, // Don't do `{ location: { type: String } }`
           enum: ['Point'], // 'location.type' must be 'Point'
           required: true
         },
         coordinates: {
           type: [Number],
           required: true
         }
       },
       rating :[
            rate : Number
       ],
       report : [
           reason : String
       ]
    },{ timestamps: { createdAt: 'created_at' } },{collection:'toilet_schema'});

var ToiletModel = mongoose.model('toilet_schema',ToiletSchema);

module.exports = {
    ToiletModel
}
