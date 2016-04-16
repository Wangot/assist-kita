var express = require('express');
var ChikkaService = require('../services/ChikkaApiService.js');
var router = express.Router();

/* GET home page. */
router.get('/privatespace', function(req, res, next) {
  res.renderLayout('privatespace/index', { title: 'Express' }, 'privatespace/index');
});

router.get('/', function(req, res, next) {
  res.renderLayout('public/index', { title: 'Express' }, '');
});

router.get('/login', function(req, res, next) {
  res.renderLayout('public/login', { title: 'Express' }, '');
});


/* Chikka API Message Receiver */
router.post('/chikka/receive', function(req, res, next) {
  res.status(200).send('POST request to the homepage')
});

router.get('/chikka/test', function(req, res, next) {

	var chikkaService = new ChikkaService();

	chikkaService.send('639173859454', "Testing API", function(error, result){
		if (error) return res.send(400, error);
        res.status(200).send('POST request to the homepage')
	});
});


module.exports = router;