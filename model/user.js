var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mapp')

mongoose.model('User', new mongoose.Schema({
    email:{type:String,isRequired:true},
    username:{type:String},
    password:{type:String,isRequired:true},
    musicList:{type:Object,default:[{
        name:{type:String,isRequired:true},
        composer:{type:String,isRequired:true}
    }]},
    movieList:{type:Object,default:[{
        name:{type:String,isRequired:true},
        director:{type:String,isRequired:true}
    }]}
}));


// mongoose.model('Music',new mongoose.Schema({
//     name:{type:String,isRequired:true},
//     composer:{type:String,isRequired:true}
// }))
//
// mongoose.model('Movie',new mongoose.Schema({
//     name:{type:String,isRequired:true},
//     director:{type:String,isRequired:true}
// }))

global.Model = function (modelName) {
    return mongoose.model(modelName)
}