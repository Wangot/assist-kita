/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function UserFormController($routeParams) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;
}

CoreObjectUtilities.inherit(UserFormController, PrivatespaceModuleBaseController);

angular.extend(UserFormController.prototype, {});

module.exports = UserFormController;