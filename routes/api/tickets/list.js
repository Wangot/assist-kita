var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    var condition = {
        where: {
            parent_id: null
        },
        include: [
            {
                model: models.User,
                as: 'Maker',
                attributes: ['id', 'username']
            }
        ]
    };

    if(req.query.status){
        condition.where.status = req.query.status;
    }

    models.Ticket.findAll(condition).then(function(results){
        res.renderJsonSuccess({ Ticket: results });
    });
}