/**
 *
 */

var angular = require('angular');
var CoreModuleBaseService = require('../../core/base/CoreModuleBaseService');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function PublicModuleBaseService() {

    CoreModuleBaseService.call(this);

}

CoreObjectUtilities.inherit(PublicModuleBaseService, CoreModuleBaseService);

angular.extend(PublicModuleBaseService.prototype, {

});

module.exports = PublicModuleBaseService;