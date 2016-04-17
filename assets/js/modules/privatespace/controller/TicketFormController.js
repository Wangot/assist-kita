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
  vm.ticketReplyContent = null;
  vm.Ticket = {};

  function _init() {
  	var ticketModel = SimpleRestClientService('tickets/'+ vm.ticketId);

  	ticketModel.get()
  	.then(function(res) {
  		 console.log(res);
  		 vm.Ticket = res.Tickets;
  	});


  }

  vm.reply = function(toClose) {
  	if (!vm.ticketReplyContent) {
  		alert('Reply is required.');
  	}

  	var ticketModel = SimpleRestClientService('tickets/'+ vm.ticketId +'/sub-tickets');

  	var data = {
  		content: vm.ticketReplyContent
  	};

  	if (toClose) data.status = 'CLOSED';


  	ticketModel.save(data)
  	.then(function(res) {
        console.log("not moving")
  		 $location.path('/ticket');
  	});

  }

  _init();
}

CoreObjectUtilities.inherit(TicketController, PrivatespaceModuleBaseController);

angular.extend(TicketController.prototype, {});

module.exports = TicketController;