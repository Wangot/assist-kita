var path = require('path');
var models = require(path.resolve("./models/orm"));
var sChikkaSms = require(path.resolve("./models/services/ChikkaApiService"));

module.exports = function(req, res) {
    if(req.user){
        userId = req.user.id;
    }else{
        req.user = {id: 1}
    }

    var paramsObj = {
        title: req.body.title,
        content: req.body.content,
        maker_id: req.user,
    };

    /*var paramsObj = {
        title: "",
        content: "Reply ako",
        maker_id: 1
    };*/

    return models.sequelize.transaction(function (t) { 
        return models.Ticket.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: models.User,
                    as: "Maker"
                }
            ]
        }).then(function(ticket){
            paramsObj.parent_id = ticket.id;
            var chikkaService = new sChikkaSms();
            return chikkaService.send(paramsObj.content, ticket.Maker.username).then(function(messageData){  
                console.log('test1');
                console.log(models.Ticket);
                return models.Ticket.create(
                    paramsObj, 
                    {transaction: t}
                ).then(function(subTicket){
                    console.log('test2');
                    if(req.body.status && req.body.content == "CLOSED"){
                        console.log('test3');
                        return ticket.updateAttributes({status: "CLOSED"}, {transaction: t})
                    }else{
                        console.log('test4');
                        return ticket
                    }
                });
            });
        });
    }).then(function(result){
       res.renderJsonSuccess({ SubTicket: result });
    }).catch(function(err){
        console.log(err);
        res.renderJsonFail('Failed saving reply.', err.errors);
    });

}