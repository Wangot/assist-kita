var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;
    params = {
        health_center_id: 1 // Id claiming the surplus

    };

    return models.sequelize.transaction(function (t) { 
        return models.Usage.findOne({
            where: {
                id: req.params.id
            },
            include: [
                models.Inventory
            ]
        }).then(function(usage){
            return usage.updateAttribute({status: 'ACTIVE'}, {transaction: t}).then(function(){
                var inv = usage.Inventory.get({plain: true});
                delete inv.id;
                inv.stock = usage.amount;
                inv.health_center_id = params.health_center_id;

                return models.Inventory.create(inv, {transaction: t}).then(function(inventory){
                    return usage;
                })
            })
        })
    }).then(function(usage){
        res.renderJsonSuccess({ Usage: usage });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the usage', err.errors);
    });
}