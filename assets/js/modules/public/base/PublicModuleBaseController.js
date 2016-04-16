/**
 *
 */

var angular = require('angular');
var CoreModuleBaseController = require('../../core/base/CoreModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function PublicModuleBaseController() {
	CoreModuleBaseController.call(this);
}

CoreObjectUtilities.inherit(PublicModuleBaseController, CoreModuleBaseController);

angular.extend(PublicModuleBaseController.prototype, {

});

module.exports = PublicModuleBaseController;