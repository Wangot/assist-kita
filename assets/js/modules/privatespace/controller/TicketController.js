/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TicketController($routeParams, $uibModal) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.openHospitalModal = function() {
	  var modalInstance = $uibModal.open({
	    animation: true,
	    templateUrl: '/views/privatespace/modals/hospitalInfo.ejs',
	    controller: 'HospitalInfoController',
	    controllerAs: 'vm',
	    resolve: {
	    }
	  });

	  modalInstance.result
	  .then(function () {

	  }, function () {

	  });
  }

}

CoreObjectUtilities.inherit(TicketController, PrivatespaceModuleBaseController);

angular.extend(TicketController.prototype, {});

module.exports = TicketController;