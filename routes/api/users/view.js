var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.User.findOne({ 
        where: {id: req.params.userId}, 
        attributes: { exclude: ['password', 'password_reset_token', 'password_reset_requested_at', 'created_at', 'updated_at'] },
        include: [
            {
                model: models.Profile
            },
            {
                model: models.Role
            }
        ]
    }).then(function(user){
        if(user){
            res.renderJsonSuccess({ User: user });
        } else {
            res.renderJsonFail('User not found.');
        }
    });
}