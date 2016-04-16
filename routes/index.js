var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.renderLayout('index', { title: 'Express' }, 'main');
});

/* GET home page. */
router.get('/privatespace', function(req, res, next) {
  res.renderLayout('index', { title: 'Express' }, 'privatespace/index');
});

router.get('/', function(req, res, next) {
  res.renderLayout('index', { title: 'Express' }, 'public/index');
});

router.get('/login', function(req, res, next) {
  res.renderLayout('main/public/login', { title: 'Express' }, '');
});


module.exports = router;