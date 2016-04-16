/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function TicketController($routeParams) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;
}

CoreObjectUtilities.inherit(TicketController, PrivatespaceModuleBaseController);

angular.extend(TicketController.prototype, {});

module.exports = TicketController;