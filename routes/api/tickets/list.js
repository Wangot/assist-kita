var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.Ticket.findAll({
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
    }).then(function(results){
        res.renderJsonSuccess({ Ticket: results });
    });
}