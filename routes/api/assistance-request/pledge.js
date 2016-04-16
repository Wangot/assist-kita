var path = require('path');
var models = require(path.resolve("./models/orm"));
var mUser = require(path.resolve("./models/User"));

module.exports = function(req, res) {
    var params = req.body;

    params = {
        health_center_id: 2, // Giver of medicine
        inventory_id: 1 // Giver's inventory item
    }
    
    return models.sequelize.transaction(function (t) { 
        return models.AssistanceRequest.findOne({
            where: {
                id: req.params.id,
                inventory_id: req.body.inventory_id,
            }
        }).then(function(assistanceRequest){
            var inv = {
                stock: assistanceRequest.amount,
                health_center_id: assistanceRequest.health_center_id,
                generic_name_id: assistanceRequest.generic_name_id,
                medicine_form_id: assistanceRequest.medicine_form_id
            };

            return models.Inventory.create(inv, {transaction: t}).then(function(inventory){
                return assistanceRequest.updateAttribute({inventory_id: inventory.id}, {transaction:t}).then(function(){
                    var usageRaw = {
                        amount: assistanceRequest.amount,
                        health_center_id: params.health_center_id,
                        inventory_id: params.inventory_id
                    }

                    return models.Usage.create(usageRaw, {transaction: t}).then(function(usage){
                        return assistanceRequest;
                    })
                    
                });
            })
        })
    }).then(function(assistanceRequest){
        res.renderJsonSuccess({ AssistanceRequest: assistanceRequest });
    }).catch(function(err){ console.log(err)
        res.renderJsonFail('Failed saving the AssistanceRequest', err.errors);
    });
}