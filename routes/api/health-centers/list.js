var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.HealthCenter.findAll().then(function(results){
        res.renderJsonSuccess({ HealthCenters: results });
    });
}