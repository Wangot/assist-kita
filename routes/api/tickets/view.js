var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.Ticket.findOne({ 
        where: {id: req.params.id},
        include: [
            {
                model: models.Ticket,
                as: "SubTickets",
                include: [
                    {
                        model: models.User,
                        as: "Maker",
                        attributes: ['id', 'username']
                    }
                ]
            }
        ]
    }).then(function(resultObj){
        if(resultObj){
            res.renderJsonSuccess({ Tickets: resultObj });
        }else{
            res.renderJsonFail('Tickets not found.');
        }
    });
}