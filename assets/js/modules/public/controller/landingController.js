/**
 *
 */
 'use strict';

var angular = require('angular');
var PublicModuleBaseController = require('../base/PublicModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function landingController($routeParams) {
  PublicModuleBaseController.call(this);

}

CoreObjectUtilities.inherit(landingController, PublicModuleBaseController);

angular.extend(landingController.prototype, {});

module.exports = landingController;