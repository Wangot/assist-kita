var path = require('path');
var models = require(path.resolve("./models/orm"));

module.exports = function(req, res) {
    models.HealthCenter.findOne({ 
        where: {id: req.params.id},
        include: [
            {
                attributes: { exclude: ['created_at', 'updated_at'] },
                model: models.Inventory,
                include: [
                    {
                        attributes: { exclude: ['created_at', 'updated_at'] },
                        model: models.GenericName,
                    },
                    {
                        attributes: { exclude: ['created_at', 'updated_at'] },
                        model: models.MedicineForm,
                    }
                ]
            },
            {
                model: models.AssistanceRequest,
                attributes: { exclude: ['created_at', 'updated_at'] }
            }
        ]
    }).then(function(resultObj){
        if(resultObj){
            res.renderJsonSuccess({ HealthCenter: resultObj });
        }else{
            res.renderJsonFail('HealthCenter not found.');
        }
    });
}