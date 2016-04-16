var Q = require("q");
var path = require('path');
var models = require(path.resolve("./models/orm"));

var ChikkaSms = {};

ChikkaSms.add = function(params){
    return models.ChikkaSms.create(params);
}

module.exports = ChikkaSms;