var path = require('path');
var express = require('express');
var router = express.Router();

require('./health-centers')(router);
require('./tickets')(router);

module.exports = router;