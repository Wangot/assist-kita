var express = require('express');
var router = express.Router();

var path = require('path');
var ChikkaService = require(path.resolve("./models/services/ChikkaApiService"));
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

//curl --data "message_type=INCOMING&mobile_number=639173859454&shortcode=29290170414&timestamp=343453&request_id=77575&message=akoaymaysakit" http://localhost:3000/chikka/receive
router.post('/chikka/receive', require("./chikka/receive"));

router.get('/chikka-reg', function(req, res, next){
    req.body.message = "REG Patient_fname Patient_lname Emergency Po, masakit na masakit ang ulo ko.";
    req.body.mobile_number = "639166976000";
    req.body.shortcode = "29290170414"
    req.body.timestamp = new Date();

    require("./chikka/receive")(req, res, next)
});

router.get('/chikka-sos', function(req, res, next){
    req.body.message = "SOS 10 TaclobanFlood";
    req.body.mobile_number = "639166976000";
    req.body.shortcode = "29290170414"
    req.body.timestamp = new Date();
    
    require("./chikka/receive")(req, res, next)
});

router.get('/chikka-request', function(req, res, next){
    req.body.message = "REQUEST 10 4 1000 KulangKamingParacetamol";
    req.body.mobile_number = "639166976000";
    req.body.shortcode = "29290170414"
    req.body.timestamp = new Date();

    require("./chikka/receive")(req, res, next)
});

//For testing purposes only
router.get('/chikka/test', function(req, res, next) {

    var chikkaService = new ChikkaService();

    /*chikkaService.send('639173859454', "Testing api", function(error, result){
        if (error) return res.send(400, error);
        
        res.send('POST request to the homepage');
    });*/
    res.status(200).send('POST request to the homepage');
});

module.exports = router;