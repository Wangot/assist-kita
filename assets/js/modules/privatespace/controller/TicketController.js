/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TicketController($routeParams, $uibModal, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  function _init() {
  	var ticketsModel = SimpleRestClientService('tickets');

  	ticketsModel.get({status: 'ACTIVE'})
  	.then(function(res) {
  		vm.Tickets = res.Ticket;
  	});
  }

  vm.openHospitalModal = function() {
	  var modalInstance = $uibModal.open({
	    animation: true,
	    templateUrl: '/views/privatespace/modals/hospitalInfo.ejs',
	    controller: 'HospitalInfoController',
	    controllerAs: 'vm',
	    resolve: {
	    }
	  });
  }

  vm.openHealthCenterModal = function() {
	  var modalInstance = $uibModal.open({
	    animation: true,
	    templateUrl: '/views/privatespace/modals/healtCenterInfo.ejs',
	    controller: 'HospitalInfoController',
	    controllerAs: 'vm',
	    resolve: {
	    }
	  });
  }  



  _init();

}

CoreObjectUtilities.inherit(TicketController, PrivatespaceModuleBaseController);

angular.extend(TicketController.prototype, {});

module.exports = TicketController;