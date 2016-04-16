var path = require('path');
var express = require('express');
var router = express.Router();

require('./health-centers')(router);
require('./tickets')(router);
require('./users')(router);

module.exports = router;