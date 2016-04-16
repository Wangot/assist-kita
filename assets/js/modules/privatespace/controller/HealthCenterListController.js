/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function HealthCenterListController($routeParams, $uibModal, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.HealthCenters = [];

  function _init() {
  	var HealthCenterModel = SimpleRestClientService('health-centers');

  	HealthCenterModel.get()
  	.then(function(res) {
  		vm.HealthCenters = res.HealthCenters;
  	});


  }

  _init();

}

CoreObjectUtilities.inherit(HealthCenterListController, PrivatespaceModuleBaseController);

angular.extend(HealthCenterListController.prototype, {});

module.exports = HealthCenterListController;