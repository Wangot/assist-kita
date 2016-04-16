/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TestController($routeParams) {
  PrivatespaceModuleBaseController.call(this);
}

CoreObjectUtilities.inherit(TestController, PrivatespaceModuleBaseController);

angular.extend(TestController.prototype, {});

module.exports = TestController;