var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.HealthCenter.findOne({ 
        where: {id: req.params.id}
    }).then(function(resultObj){
        if(resultObj){
            res.renderJsonSuccess({ HealthCenter: resultObj });
        }else{
            res.renderJsonFail('HealthCenter not found.');
        }
    });
}