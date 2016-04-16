/**
 *
 */

var angular = require('angular');
var CoreModuleBaseController = require('../../core/base/CoreModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function PrivatespaceModuleBaseController() {

    CoreModuleBaseController.call(this);

}

CoreObjectUtilities.inherit(PrivatespaceModuleBaseController, CoreModuleBaseController);

angular.extend(PrivatespaceModuleBaseController.prototype, {

});

module.exports = PrivatespaceModuleBaseController;