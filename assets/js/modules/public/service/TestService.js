'use strict';

var angular = require('angular');
var PublicModuleBaseService = require('../base/PublicModuleBaseService');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TestService($q, $http, SimpleRestClientService) {

    PublicModuleBaseService.call(this);
}

CoreObjectUtilities.inherit(TestService, PublicModuleBaseService);

angular.extend(TestService.prototype, {

});

module.exports = TestService;