/**
 *
 */
 'use strict';

var angular = require('angular');
var PublicModuleBaseController = require('../base/PublicModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function PublicIndexController($routeParams) {
  PublicModuleBaseController.call(this);
}

CoreObjectUtilities.inherit(PublicIndexController, PublicModuleBaseController);

angular.extend(PublicIndexController.prototype, {});

module.exports = PublicIndexController;