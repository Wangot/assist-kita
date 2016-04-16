var express = require('express');
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


module.exports = router;