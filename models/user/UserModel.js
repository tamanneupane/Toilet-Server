var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var UserSchema= new Schema({
       name: String,
    },{ timestamps: { createdAt: 'created_at' } },{collection:'user_schema'});

var UserModel = mongoose.model('user_schema',UserSchema);