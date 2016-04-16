var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;
    /*var params = {
        username: 'xxxx',
        email: 'xxxx@xxx.com',
        Profile: {
            first_name: 'xxxxxx',
            middle_name: 'a',
            last_name: 'yyyyyy'
        },
        Websites: [
            {
                id: 1
            }
        ],
        Roles: [
            {
                id: 1
            }
        ]
    };*/

    return models.sequelize.transaction(function (t) { 
        return mUser.add(t, params)
    }).then(function(user){
        res.renderJsonSuccess({ User: user });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the user', err.errors);
    });
}