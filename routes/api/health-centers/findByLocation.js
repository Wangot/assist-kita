var path = require('path');
var models = require(path.resolve("./models/orm"));
var sPagination = require(path.resolve("./models/services/Pagination"));

module.exports = function(req, res) {
    var query = req.query;
    var condition = {};
    //sPagination(condition, query);
    models.HealthCenter.findByLocation(req.params.lat, req.params.lng, req.params.dist).then(function(results){
        query.total = results.count;
        console.log(results);
        res.renderJsonSuccess({ HealthCenters: results[0] });
    });
}