var express = require('express');
var router = express.Router();
var path = require('path');
var url = require('url');
var request = require('request');
var movie_API = 'http://www.omdbapi.com/?apikey=868c3a5f&t=';

/*
localhost/userlist?id=xxx&name=yyy，这种方式可以通过req.query.id
获取参数的值

这种形式浏览器必须严格按照localhost/userlist/xxx/yyy的形式访问,
如果少传一个参数就会报404错误，
通过req.params.id获取对应的参数的值
* */
/*
{
    "Title": "There's Something About Mary",
    "Year": "1998",
    "Rated": "R",
    "Released": "15 Jul 1998",
    "Runtime": "119 min",
    "Genre": "Comedy, Romance",
    "Director": "Bobby Farrelly, Peter Farrelly",
    "Writer": "Ed Decter (story), John J. Strauss (story), Ed Decter (screenplay), John J. Strauss (screenplay), Peter Farrelly (screenplay), Bobby Farrelly (screenplay)",
    "Actors": "Cameron Diaz, Matt Dillon, Ben Stiller, Lee Evans",
    "Plot": "A man gets a chance to meet up with his dream girl from high school, even though his date with her back then was a complete disaster.",
    "Language": "English",
    "Country": "USA",
    "Awards": "Nominated for 2 Golden Globes. Another 17 wins & 15 nominations.",
    "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZWFlZjE5OTYtNWY0ZC00MzgzLTg5MjUtYTFkZjk2NjJkYjM0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "7.1/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "83%"
        },
        {
            "Source": "Metacritic",
            "Value": "69/100"
        }
    ],
    "Metascore": "69",
    "imdbRating": "7.1",
    "imdbVotes": "260,773",
    "imdbID": "tt0129387",
    "Type": "movie",
    "DVD": "03 Aug 1999",
    "BoxOffice": "N/A",
    "Production": "20th Century Fox",
    "Website": "N/A",
    "Response": "True"
}
* */

router.get('/search/',function (req,res) {
    // console.log(req.url)
    // console.log(url.parse(req.url))
    // console.log(url.parse(req.url).query["keyword"])
    // var keyword = url.parse(req.url).query["keyword"].trim();
    var keyword = req.query.keyword;
    console.log(keyword,'keyword')
    var request_url = movie_API+keyword;
    console.log(request_url)

    // var options = {
    //     url: request_url,
    //     method: 'GET',
    //     json: true
    // }


    request({url:request_url,method:'GET'},function (err,data) {
        if(err){
            res.send({
                id:0,
                type:'fail to fetch'
            })
        }else{
            console.log(data.body);
            res.send(data)
        }

    });
})

module.exports = router