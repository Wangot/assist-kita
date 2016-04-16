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

  vm.checkExpiryDate = function(date) {
    var ret = false;

    var today = moment();
    var exp = moment(date);

    if (exp.diff(today, 'month') <= 6) {
      ret = 'orange';
    }

    if (exp.diff(today, 'month') >= 6 && exp.diff(today, 'month') <= 12) {
      ret = 'red';
    }    

    return ret;
  }

  vm.openSurplusModal = function(inventoryId) {
    var Info = {
      inventory_id: inventoryId,
      type: 'SURPLUS'
    }

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/requestAssistance.ejs',
      controller: 'SurplusController',
      controllerAs: 'vm',
      resolve: {
        Info: function() {
          return Info;
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