var express = require('express');
var router = express.Router();

var path = require('path');
// var passport = require('passport');
// var models = require(path.resolve("./models/orm"));
// var auth = require(path.resolve("./models/auth"));
// var i18n = require("i18next");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.renderLayout('public/index', { title: 'Express' }, '');
});

router.get('/login', function(req, res, next) {
  res.renderLayout('public/login', { title: 'Express' }, '');
});

/* Chikka API Message Receiver */
router.post('/chikka/receive', function(req, res, next) {
 res.send('POST request to the homepage');
});

router.get('/chikka/test', function(req, res, next) {

    var chikkaService = new ChikkaService();

    chikkaService.send('639173859454', "Testing api", function(error, result){
        if (error) return res.send(400, error);
        
        res.send('POST request to the homepage');
    });
});

module.exports = router;