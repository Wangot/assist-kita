var path = require('path');
var models = require(path.resolve("./models/orm"));

exports.get = function(req, res) {
    models.User.findOne({ 
        where: {
            password_reset_token: req.params.token,
            password_reset_requested_at: {
                $or: {
                    $gt: new Date(new Date() - 60 * 60 * 1000 * 3), // 3 hours
                    $eq: null
                }
            },
        },
        attributes: { exclude: ['password', 'password_reset_requested_at', 'created_at', 'updated_at'] }
    }).then(function(user){
        if(user){
            var userRaw = user.get({plain: true});
            res.renderLayout('public/change-password', {title: "Change password", password_token: userRaw.password_reset_token}, 'public');
        } else {
            console.log("TODO: add message Invalid reset password token.")
            res.redirect("/login")
        }
    });
}

exports.post = function(req, res, next) {
  var data = {
    title: "Change password",
    errorMessage: ''
  }

  if(req.body.password != req.body.password2){
    data.errorMessage = 'Password did not match.';
    data.password_token = req.body.token;
    return res.renderLayout('public/change-password', data, 'public');
      // res.renderJsonFail('Password and verify password are not equal.');
  }

  models.User.findOne({ 
      where: {
          password_reset_token: req.body.token,
          password_reset_requested_at: {
              $or: {
                  $gt: new Date(new Date() - 60 * 60 * 1000 * 3), // 3 hours
                  $eq: null
              }
          },
      }
  }).then(function(user){
    if(user){
        user.updateAttributes({
            password: req.body.password,
            password_reset_token: null,
            password_reset_requested_at: null
        }).then(function(user){
          var userRaw = user.get({plain: true});
          return res.redirect('/login?username=' + userRaw.username);
            // res.renderJsonSuccess(user, 'BOOM...');
        });
    } else {
     data.errorMessage = 'Token has expired.';
     data.password_token = req.body.token;
     return res.renderLayout('public/change-password', data, 'public');
        // res.renderJsonFail('Token has expired.');
    }
  });
}