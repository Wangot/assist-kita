/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function HealthCenterFormController($routeParams, $uibModal, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.HealthCenter = {};

  function _init() {
  	var HealthCenterModel = SimpleRestClientService('health-centers/' + $routeParams.id);

  	HealthCenterModel.get()
  	.then(function(res) {
  		vm.HealthCenter = res.HealthCenter;
  	});
  }

  vm.sendRequest = function() {
  	
  }

  _init();

}

CoreObjectUtilities.inherit(HealthCenterFormController, PrivatespaceModuleBaseController);

angular.extend(HealthCenterFormController.prototype, {});

module.exports = HealthCenterFormController;