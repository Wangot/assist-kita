var path = require('path');
var models = require(path.resolve("./models/orm"));
var mailer = require(path.resolve("./models/Mailer"));
var passwordHelper = require("accelecore").Password;

var env = process.env.NODE_ENV || "development";
var config = require(path.resolve("./config"))(env);

var i18n = require('i18next');
var fsUtils = require('fs-utils');
var _ = require('underscore');

module.exports = function(req, res) {
    models.User.findOne({ 
        where: {email: req.body.email},
        include: [
            {
                model: models.Profile
            }
        ]
    }).then(function(user){
      var data = {
        title: 'WEBPIE',
        message: ''
      }

      if(user){

          var token = passwordHelper.generateRandomToken();
          user.updateAttributes({
              // password: newRandPass
              password_reset_token: token,
              password_reset_requested_at: new Date()
          }).then(function(){
              var params = {};

              var templatePath = path.resolve("views/email/password_reset.html");
              var template = fsUtils.readFileSync(templatePath);
              var emailTemplates = _.template(template);

              // TODO: Build link using token using config
              // Ex. http://mix.gigadevs.com/access/[token]
              params.token = token; 
              params.link = config.url + "change-password/"+ token;
              params.t = i18n.t;
              params.username = user.email;

              mailer.send(
                  user.email, 
                  i18n.t('reset_password_initiated'),
                  emailTemplates(params)
              ).then(function(result){
                // res.renderJsonSuccess(result);
                data.message = 'success';
                res.renderLayout('/public/reset-password-success', data, 'public');
              }).catch(function(err){
                  console.log(err);
                  data.message = 'Cannot send email, an error occured.';
                  res.renderLayout('/public/reset-password-success', data, 'public');
                  // res.renderJsonFail('Can not send email, an error occured.', err);
              });
          });
      } else {
        data.message = 'Email not yet registered.';
        res.renderLayout('/public/reset-password-success', data, 'public');
          // res.renderJsonFail('Email not yet registered.');
      }


    }); 
}