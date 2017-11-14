var express = require('express');
var url = require('url');
var path = require('path')
var port = 3000;

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cookieParser = require('cookie-parser');
require('./model/user');
var mongoose = require('mongoose');
var utils =require('./utils/md5');

var user = require('./router/user');
var music = require('./router/music')
var movie = require('./router/movie')

var app = new express();
var bodyParser = require('body-parser');

// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 允许所有的请求形式
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/user',user);
app.use('/music',music);
app.use('/movie',movie);

var server = app.listen(port,function(){

    var port = server.address().port
    console.log("访问port为 %s", port)
})

