/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function UsagesController($routeParams, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.Usages = [];

  function _init() {
  	var UsagesSurplusModel = SimpleRestClientService('usages/' + $routeParams.healthCenterId + '/surplus');

  	UsagesSurplusModel.get()
  	.then(function(res) {
  		vm.Usages = res.Usage;
  	});
  }

  _init();

}

CoreObjectUtilities.inherit(UsagesController, PrivatespaceModuleBaseController);

angular.extend(UsagesController.prototype, {});

module.exports = UsagesController;