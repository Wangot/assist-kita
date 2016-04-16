/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../../core/utilities/CoreObjectUtilities');

function SurplusController($routeParams, $uibModalInstance, $http, Info) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.Info = Info;
  vm.title = 'Surplus Share';

  vm.close = function () {
	$uibModalInstance.dismiss('cancel');
  };

  vm.sendRequest = function() {
  	$http.post('api/usages/surplus', vm.Info)
  	.then(function(res) {
      $uibModalInstance.close(res);
  	});
  }
}

CoreObjectUtilities.inherit(SurplusController, PrivatespaceModuleBaseController);

angular.extend(SurplusController.prototype, {});

module.exports = SurplusController;