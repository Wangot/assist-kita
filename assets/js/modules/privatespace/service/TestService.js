'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseService = require('../base/PrivatespaceModuleBaseService');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TestService($q, $http, SimpleRestClientService) {

    PrivatespaceModuleBaseService.call(this);
}

CoreObjectUtilities.inherit(TestService, PrivatespaceModuleBaseService);

angular.extend(TestService.prototype, {

});

module.exports = TestService;