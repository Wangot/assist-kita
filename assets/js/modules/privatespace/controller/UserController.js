/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function UserController($routeParams) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;
}

CoreObjectUtilities.inherit(UserController, PrivatespaceModuleBaseController);

angular.extend(UserController.prototype, {});

module.exports = UserController;