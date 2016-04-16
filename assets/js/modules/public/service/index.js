'use strict';

var angular = require('angular');
var privatespaceModule = angular.module('app.privatespace');

privatespaceModule.service('TestService', require('./TestService.js'));