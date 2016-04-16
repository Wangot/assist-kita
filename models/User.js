var Q = require("q");
var path = require('path');
var models = require(path.resolve("./models/orm"));

var User = {};

User.add = function(t, data){
    return models.User.create(data, {transaction: t}).then(function(user){
        return user.createProfile(data.Profile, {transaction: t}).then(function(profile){
            if(!data.Roles) data.Roles = {id: 2};
            return addRoles(t, user, data.Roles).then(function(roles){
                var userRaw = user.get({plain: true});
                userRaw.Roles = roles;
                return user;
            })
        })
    });
}

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
                type: "PATIENT",
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



function addRoles(t, user, rolesParam){
    var deferred = Q.defer();
    if(Array.isArray(rolesParam) && rolesParam.length > 0){
        var ids = [];
        for (var i = rolesParam.length - 1; i >= 0; i--) {
            ids.push(rolesParam[i].id);
        }

        models.Role.findAll({
            where: {
                id: ids
            }
        }).then(function(roles){
            user.setRoles(roles, {transaction: t}).then(function(){
                deferred.resolve(roles);
            })
        })
    }else{
        deferred.resolve([]);
    }

    return deferred.promise;
}

module.exports = User;