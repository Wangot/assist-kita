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

  vm.openSendRequestModal = function(generic_name_id, medicine_form_id) {
    var data = {
      id: vm.HealthCenter.id,
      generic_name_id: generic_name_id,
      medicine_form_id: medicine_form_id
    }

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/requestAssistance.ejs',
      controller: 'RequestAssistanceController',
      controllerAs: 'vm',
      resolve: {
        HealthCenter: function() {
          return data;
        }
      }
    });

    modalInstance.result
    .then(function () {

    }, function () {

    });    
  }


  _init();

}

CoreObjectUtilities.inherit(HealthCenterFormController, PrivatespaceModuleBaseController);

angular.extend(HealthCenterFormController.prototype, {});

module.exports = HealthCenterFormController;