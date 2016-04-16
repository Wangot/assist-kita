/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../../core/utilities/CoreObjectUtilities');

function LandingSearchController($routeParams, $uibModalInstance) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

	vm.close = function () {
	  $uibModalInstance.dismiss('cancel');
	};

}

CoreObjectUtilities.inherit(LandingSearchController, PrivatespaceModuleBaseController);

angular.extend(LandingSearchController.prototype, {});

module.exports = LandingSearchController;