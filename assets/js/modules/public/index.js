'use strict';

var angular = require('angular');
var privatespaceModule = angular.module('app.public', []);

require('./service')
// privatespaceModule.factory('WebsiteService', require('./service/WebsiteService.js'));
// privatespaceModule.factory('WizardStepService', require('./service/WizardStepService.js'));

require('./controller')
// privatespaceModule.controller('MainController', require('./controller/mainController.js'));
