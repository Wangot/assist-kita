var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    var condition = {
        attributes: { exclude: ['password', 'password_reset_token', 'password_reset_requested_at', 'created_at', 'updated_at'] },
        include: [
            {
                model: models.Profile
            }
        ]
    };

    models.User.findAll(condition).then(function(user){
        res.renderJsonSuccess({ Users: user });
    });
}