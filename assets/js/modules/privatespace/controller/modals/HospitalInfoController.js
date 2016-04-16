/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../../core/utilities/CoreObjectUtilities');

function HospitalInfoController($routeParams, $uibModalInstance) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

	vm.close = function () {
	  $uibModalInstance.dismiss('cancel');
	};

}

CoreObjectUtilities.inherit(HospitalInfoController, PrivatespaceModuleBaseController);

angular.extend(HospitalInfoController.prototype, {});

module.exports = HospitalInfoController;