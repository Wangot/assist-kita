var Q = require("q");
var path = require('path');
var models = require(path.resolve("./models/orm"));

var Ticket = {};

Ticket.add = function(params, ticket){
    if(ticket){
        params.parent_id = ticket.id;
    }

    return models.Ticket.create(params);
}

Ticket.createChikkaSms = function(user, chikkaSms){
    return models.Ticket.findOne({
        where: {
            maker_id: user.id,
            parent_id: null,
            status: "ACTIVE"
        }
    }).then(function(ticket){
        var params = {

        };

        return Ticket.add(params, ticket);
    })
}

module.exports = Ticket;