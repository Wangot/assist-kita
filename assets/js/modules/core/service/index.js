'use strict';

var angular = require('angular');
var coreModule = angular.module('app.core');

coreModule.factory('SimpleRestClientService', require('./SimpleRestClientService'));
coreModule.service('SimpleRestResultFilter', require('./SimpleRestResultFilter'));

// i18next wrapper
coreModule.factory('i18nHelper', require('./i18nextWrapper'));