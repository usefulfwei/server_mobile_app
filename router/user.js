var express = require('express');
var router = express.Router();
var path = require('path');

// bodyParser = require('body-parser').json();
// var API = 'localhost:3000'

router.post('/register',function (req,res) {
    var user = req.body;
    Model('User').findOne({email:user.email},function (err,doc) {
        if (err){
            res.send({
                id:2,
                type:2
            })
        }else if(doc){
            res.send({
                id:0,
                type:'email being token'
            })
        }else{
            Model('User').create(user,function (err,doc) {
                if(err){
                    res.send({
                        id:0,
                        type:'error in building'
                    })
                }else{
                    res.send({
                        id:1,
                        type:1
                    })
                }
            })
        }
    })
});
router.post('/login',function (req,res) {
    var user = req.body;
    Model('User').findOne({email:user.email},function (err,doc) {
        if(err){
            res.send({
                id:3,
                type:'error in server'
            })
        }else{
            if(user.password !== doc.password){
                res.send({
                    id:2,
                    type:'wrong password'
                })
            }else{
                res.send({
                    id:1,
                    type:1,
                    data:doc
                })
            }
        }
    })
});
router.post('/logoff',function (req,res) {
    var user = req.body;
    Model('User').findOne({email:user.email},function (err,doc) {
        if(err){
            res.send({
                id:0,
                type:'error in server'
            })
        }else{
            Model('User').update({email:user.email},{$set:{username:user.username,musicList:user.musicList,movieList:user.movieList}},function (err,docs) {
                if(err){
                    res.send({
                        id:0,
                        type:'error in update'
                    })
                }else{
                    res.send({
                        id:1,
                        type:1
                    })
                }
                console.log(docs,'newdata')
            })
        }
    })
})

module.exports = router