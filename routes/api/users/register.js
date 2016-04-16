var path = require('path');
var models = require(path.resolve("./models/orm"));
var mailer = require(path.resolve("./models/Mailer"));
var passwordHelper = require("accelecore").Password;

var env = process.env.NODE_ENV || "development";
var config = require(path.resolve("./config"))(env);

var mUser = require(path.resolve("./models/User"));

exports.post = function(req, res) {
  var postUser = req.body;

  var data = {};

  postUser.username = postUser.email;
  postUser.Profile = {};
  postUser.Profile.first_name = postUser.first_name;
  postUser.Profile.last_name = postUser.last_name;

  if(!postUser.Roles){
    postUser.Roles = [{
            id: models.Role.getCustomer().id
        }];
  }

  return models.sequelize.transaction(function (t) { 
      return mUser.add(t, postUser);
  }).then(function(user){
    var userRaw = user.get({plain: true});
    return res.redirect('/login?username=' + userRaw.username);
  }).catch(function(err){ 
    var errors = [];

    for (var i = err.errors.length - 1; i >= 0; i--) {
      errors[err.errors[i].path] =  err.errors[i]
    };

    console.log(errors);

    res.renderLayout('/public/register', { title: 'WEBPIE Register', errors: errors, User: postUser}, 'public');
      // res.renderJsonFail('Failed saving the user', err.errors);
  });
}