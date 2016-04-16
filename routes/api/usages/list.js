var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {

    console.log(req.params);

    var type = null;

    var condition = {
        where: { id: req.params.id },
        //attributes: { exclude: ['password', 'password_reset_token', 'password_reset_requested_at', 'created_at', 'updated_at'] },
        include: [
            {
                model: models.Inventory,
                include: [
                    {
                        model: models.HealthCenter,
                    },
                    {
                        model: models.GenericName,
                    },
                    {
                        model: models.MedicineForm,
                    }
                ]
            }
        ]
    };

    if(req.query.type){
        condition.where.type = req.query.type.toUpperCase();
    }

    models.Usage.findAll(condition).then(function(user){
        res.renderJsonSuccess({ Usage: user });
    });
}