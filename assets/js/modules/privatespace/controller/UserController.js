/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function UserController($routeParams, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;
  vm.Users = [];


  function _init() {
  	var UserModel = SimpleRestClientService('users');

  	UserModel.get()
  	.then(function(res) {
  		vm.Users = res.Users;
  	});

  }

  _init();

}

CoreObjectUtilities.inherit(UserController, PrivatespaceModuleBaseController);

angular.extend(UserController.prototype, {});

module.exports = UserController;