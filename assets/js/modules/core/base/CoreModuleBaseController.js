/**
 *
 */

//var _ = require('underscore');
var angular = require('angular');

function CoreModuleBaseController() {

}

angular.extend(CoreModuleBaseController.prototype, {

    coreBinding: function() {
        this.cbinding = "Variable from core base controller";

        return this.cbinding;
    }
});

module.exports = CoreModuleBaseController;