var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;

    if(params.password && params.password != '' && params.password != params.password2){
        res.renderJsonFail('Password and verify password does not match.');
    }
    
    return models.sequelize.transaction(function (t) { 
        return models.User.findOne({
            where: {
                id: req.params.userId
            },
            include: [
                {
                    model: models.Profile
                }
            ]
        }).then(function(user){
            return mUser.update(t, user, params)
        })
    }).then(function(user){
        res.renderJsonSuccess({ User: user });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the user', err.errors);
    });
}