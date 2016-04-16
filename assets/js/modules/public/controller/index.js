'use strict';

var angular = require('angular');
var publicModule = angular.module('app.public');

publicModule.controller('TestController', require('./TestController'));

publicModule.controller('landingController', require('./landingController'));