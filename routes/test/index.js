var express = require('express');
var router = express.Router();

var path = require('path');
// var passport = require('passport');
var models = require(path.resolve("./models/orm"));
// var auth = require(path.resolve("./models/auth"));
// var i18n = require("i18next");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.end('ok');
});

router.get('/kmits', function(req, res, next) {
    var request = require('request');
    var slug = require("slug");
 
    // Set the headers
    var headers = {
        // 'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded'
    }
     
    // Configure the request
    var options = {
        url: 'http://thinkopen2016.com/api/kmits/list',
        method: 'GET',
        headers: headers
        // qs: {'key1': 'xxx', 'key2': 'yyy'}
    }
     
    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // Print out the response body
            // console.log(body)
            var jsonData = JSON.parse(body);
            var newData = [];
            for (var i = jsonData.items.length - 1; i >= 0; i--) {
                var newItem = {};
                var items = jsonData.items[i];
                for(var key in items){
                    if(key == '_id'){
                        // console.log(items[key].$oid);
                        newItem["kmits_id"] = items[key].$oid;
                    }else{
                        newItem[slug(key, { replacement: "_", lower: "true"})] = items[key];
                    }
                }
                newData.push(newItem);
            };

            models.HealthCenter.bulkCreate(newData).catch(function(err){
                console.log(err);
            })


            // console.log(newData);
        }else{
            console.log(error);
        }

    })

    console.log(req.query);



    res.end('ok');
});

module.exports = router;