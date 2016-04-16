var Q = require("q");
var path = require('path');
var models = require(path.resolve("./models/orm"));

var User = {};

User.findOrAddChikkaSms = function(chikkaSms){
    var deferred = Q.defer();
    models.User.findOne({
        where: {
            username: chikkaSms.mobile_number
        }
    }).then(function(user){
        if(user){
            deferred.resolve(user);
        }else{
            // create
            var newUser = {
                username: chikkaSms.mobile_number,
                Profile: {}
            };

            var msg = chikkaSms.message;
            var msgArr = msg.split(" ");
            if(msgArr[0].toUpperCase() == "REG"){
                // TODO: get the profile from this message
                newUser.Profile.first_name = msgArr[1];
                newUser.Profile.last_name = msgArr[2];
            }

            models.User.create(newUser, {include: models.Profile}).then(function(user){
                deferred.resolve(user);
            });
        }
    })

    return deferred.promise;
}

module.exports = User;