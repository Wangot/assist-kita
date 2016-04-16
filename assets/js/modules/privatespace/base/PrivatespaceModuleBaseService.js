/**
 *
 */

var angular = require('angular');
var CoreModuleBaseService = require('../../core/base/CoreModuleBaseService');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function PrivatespaceModuleBaseService() {

    CoreModuleBaseService.call(this);

}

CoreObjectUtilities.inherit(PrivatespaceModuleBaseService, CoreModuleBaseService);

angular.extend(PrivatespaceModuleBaseService.prototype, {

});

module.exports = PrivatespaceModuleBaseService;