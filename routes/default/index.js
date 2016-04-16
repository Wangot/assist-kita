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
router.post('/chikka/receive', function(req, res, next) {

	if(req.body.message_type && req.body.message_type.toUpperCase() != "INCOMING"){
		return  res.status(400).send('Not an Incoming message');
	}
  	
	var messageData = {
		message : req.body.message,
		mobile_number: req.body.mobile_number,
		shortcode : req.body.shortcode,
		timestamp : req.body.timestamp,
		request_id :req.body.request_id
	};

	console.log(messageData);
  	//Process received data
  	//Create ticket
 	res.status(200).send('POST request to the homepage');
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