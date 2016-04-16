/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TicketController($routeParams, SimpleRestClientService, $location) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.ticketId = $routeParams.id;
  vm.ticketContent = null;

  vm.reply = function(toClose) {
  	var ticketModel = SimpleRestClientService('tickets/'+ vm.ticketId +'/sub-tickets');

  	var data = {
  		content: vm.ticketContent
  	};

  	if (toClose) data.status = 'CLOSED';


  	ticketModel.save(data)
  	.then(function(res) {
  		 $location('/websites');
  	});

  }

}

CoreObjectUtilities.inherit(TicketController, PrivatespaceModuleBaseController);

angular.extend(TicketController.prototype, {});

module.exports = TicketController;