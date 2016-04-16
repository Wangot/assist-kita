/**
 *
 */
 'use strict';

var angular = require('angular');
var PrivatespaceModuleBaseController = require('../base/PrivatespaceModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function UserFormController($routeParams, SimpleRestClientService) {
  PrivatespaceModuleBaseController.call(this);
  var vm = this;

  vm.User = {};


  function _init() {
  	var UserModel = SimpleRestClientService('users/' + $routeParams.id );

  	UserModel.get()
  	.then(function(res) {
  		vm.User = res.User;
  	});
  }

  vm.save = function() {
  	var UserModel = {};

  	if ($routeParams.id) {
  		UserModel = SimpleRestClientService('users/' + $routeParams.id );
  	} else {
  		UserModel = SimpleRestClientService('users');
  	}

  	console.log(UserModel);

  	vm.User.username = vm.User.Profile.first_name;

  	UserModel.save(vm.User)
  	.then(function(res) {
  		vm.User = res.User;
  	});
  }


  _init();

}

CoreObjectUtilities.inherit(UserFormController, PrivatespaceModuleBaseController);

angular.extend(UserFormController.prototype, {});

module.exports = UserFormController;