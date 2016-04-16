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
        timestamp : req.body.timestamp,
        request_id :req.body.request_id
    };

    console.log(messageData);
    mChikkaSms.add(messageData).then(function(chikkaSms){
        mUser.findOrAddChikkaSms(chikkaSms).then(function(user){
            mTicket.createChikkaSms(user, chikkaSms).then(function(ticket){
                console.log(ticket)
            })
        })
    })

    //Process received data
    //Create ticket
    res.status(200).send('POST request to the homepage');
}