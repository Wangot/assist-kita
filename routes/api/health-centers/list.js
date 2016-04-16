var path = require('path');
var models = require(path.resolve("./models/orm"));
var sPagination = require(path.resolve("./models/services/Pagination"));

module.exports = function(req, res) {
    var query = req.query;
    var condition = {};
    sPagination(condition, query);
    models.HealthCenter.findAndCountAll().then(function(results){
        query.total = results.count;
        res.renderJsonSuccess({ HealthCenters: results.rows, params: query });
    });
}