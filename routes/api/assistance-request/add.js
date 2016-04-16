var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;
    /*var params = {
        amount: 100,
        description: "Can add a comment.",
        health_center_id: 1,
        generic_name_id: 1,
        medicine_form_id:1
    };*/

    return models.sequelize.transaction(function (t) { 
        return models.AssistanceRequest(params, {transaction: t})
    }).then(function(assistanceRequest){
        res.renderJsonSuccess({ AssistanceRequest: assistanceRequest });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the Assistance Request', err.errors);
    });
}