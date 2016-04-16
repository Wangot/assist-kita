var path = require('path');
var express = require('express');
var router = express.Router();

require('./health-centers')(router);

module.exports = router;