var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;
    /*var params = {
        amount: 100,
        note: "Can add a comment.",
        inventory_id: 1,
        type: 'SURPLUS'
    };*/

    return models.sequelize.transaction(function (t) { 
        return models.Usage(params, {transaction: t})
    }).then(function(usage){
        res.renderJsonSuccess({ Usage: usage });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the Usage', err.errors);
    });
}