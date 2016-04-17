/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function HealthCenterListController($routeParams, $uibModal, SimpleRestClientService, $location) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.HealthCenters = [];

  function _init() {
  	var HealthCenterModel = SimpleRestClientService('health-centers');

  	HealthCenterModel.get({page: $routeParams.page})
  	.then(function(res) {
  		vm.HealthCenters = res.HealthCenters;

      vm.showList = true;

      vm.page = res.params.page;
      var perPage = res.params.perPage;
      vm.perPage = perPage;

      var totalItems = res.params.total;
      vm.totalItems = totalItems;

      var totalPages = Math.ceil(totalItems / perPage);
      vm.totalPages = totalPages;
  	});
  }

  this.go = function() {
    $location.search(
        {
            'page': vm.page,
        }
    );
  }  

  _init();

}

CoreObjectUtilities.inherit(HealthCenterListController, PrivatespaceModuleBaseController);

angular.extend(HealthCenterListController.prototype, {});

module.exports = HealthCenterListController;