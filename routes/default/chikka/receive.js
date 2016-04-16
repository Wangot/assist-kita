var Q = require("q");
var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));
var mTicket = require(path.resolve("./models/Ticket"));
var mChikkaSms = require(path.resolve("./models/ChikkaSms.js"));

module.exports = function(req, res, next){
    if(req.body.message_type && req.body.message_type.toUpperCase() != "INCOMING"){
        return  res.status(400).send('Not an Incoming message');
    }
    
    var messageData = {
        message : req.body.message,
        mobile_number: req.body.mobile_number,
        shortcode : req.body.shortcode,
        timestamp : null,
        request_id :req.body.request_id
    };

    console.log(messageData);

    var keyword = req.body.message;
    var keywordArr = keyword.split(" ");
    if(keywordArr[0].toUpperCase() == "REG") {
        mChikkaSms.add(messageData).then(function(chikkaSms){
            mUser.findOrAddChikkaSms(chikkaSms).then(function(user){
                mTicket.createChikkaSms(user, chikkaSms).then(function(ticket){
                    console.log(ticket)
                })
            })
        })
    } else if(keywordArr[0].toUpperCase() == "REQUEST") {

        var params = {
             amount: 0,
             description: '',
             health_center_id: null,
             generic_name_id: null,
             medicine_form_id: null
        };

        switch(keywordArr.length) {
            case 5:
                params.description = keywordArr[4];
            case 4:
                params.amount = keywordArr[3];
            case 3:
                params.generic_name_id = keywordArr[2];
            case 2:
                params.health_center_id = keywordArr[1];
            case 1:
            default:

        }

        console.log(keywordArr.length);

        if(keywordArr.length >= 3) {
            //REQUEST <CENTER ID> <GENERIC ID> <AMOUNT> <MESSAGE>
            return models.sequelize.transaction(function (t) {
                return models.AssistanceRequest.create(params, {transaction: t})
            }).then(function(assistanceRequest){
                res.renderJsonSuccess({ AssistanceRequest: assistanceRequest });
            }).catch(function(err){ console.log(err)
                //res.renderJsonFail('Failed saving the Assistance Request', err.errors);
            });
        }


    } else if(keywordArr[0].toUpperCase() == "SOS") {

        var params = {
            amount: 0,
            description: '',
            health_center_id: null,
            generic_name_id: null,
            medicine_form_id: null
        };

        switch(keywordArr.length) {
            case 3:
                params.description = keywordArr[2];
            case 2:
                params.health_center_id = keywordArr[1];
            case 1:
            default:

        }

        console.log(keywordArr.length);

        if(keywordArr.length >= 3) {
            //HELP <CENTER ID> <MESSAGE>
            return models.sequelize.transaction(function (t) {
                return models.AssistanceRequest.create(params, {transaction: t})
            }).then(function (assistanceRequest) {
                res.renderJsonSuccess({ AssistanceRequest: assistanceRequest });
            }).catch(function (err) {
                console.log(err)
                //res.renderJsonFail('Failed saving the Assistance Request', err.errors);
            });
        }
    }


    //Process received data
    //Create ticket
    res.status(200).send('POST request to the homepage');
}