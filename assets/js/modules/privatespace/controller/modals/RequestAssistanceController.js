/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../../core/utilities/CoreObjectUtilities');

function RequestAssistanceController($routeParams, $uibModalInstance, $http, HealthCenter) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  console.log(HealthCenter);
  vm.Info = HealthCenter;

  vm.close = function () {
	$uibModalInstance.dismiss('cancel');
  };

  vm.sendRequest = function() {

  	$http.post('api/assistance-request/add', vm.Info)
  	.then(function(res) {
      $uibModalInstance.close(res);
  	});

  	// var assistanceRequestModel = SimpleRestClientService('');
    
   //  assistanceRequestModel.save(vm.Info)
   //  .then(function(res) {
   //  });    
  }
}

CoreObjectUtilities.inherit(RequestAssistanceController, PrivatespaceModuleBaseController);

angular.extend(RequestAssistanceController.prototype, {});

module.exports = RequestAssistanceController;