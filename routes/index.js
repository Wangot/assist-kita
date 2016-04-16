var express = require('express');
var ChikkaService = require('../services/ChikkaApiService.js');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.renderLayout('index', { title: 'Express' }, 'main');
});

/* GET home page. */
router.get('/privatespace', function(req, res, next) {
  res.renderLayout('index', { title: 'Express' }, 'privatespace/index');
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