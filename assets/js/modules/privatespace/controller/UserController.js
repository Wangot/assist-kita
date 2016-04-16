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


  function _init(filter) {
  	var UserModel = SimpleRestClientService('users');

    var params = {};
    
    if (filter == 'PATIENT') {
      params = {type: filter}
    }

  	UserModel.get(params)
  	.then(function(res) {
  		vm.Users = res.Users;
  	});

  }

  vm.filter = function(type) {
  	_init(type);
  }

  _init('ALL');

}

CoreObjectUtilities.inherit(UserController, PrivatespaceModuleBaseController);

angular.extend(UserController.prototype, {});

module.exports = UserController;