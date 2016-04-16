'use strict';

var angular = require('angular');
var privatespaceModule = angular.module('app.privatespace');

privatespaceModule.controller('TicketController', require('./TicketController'));
privatespaceModule.controller('TicketFormController', require('./TicketFormController'));

privatespaceModule.controller('UserController', require('./UserController'));
privatespaceModule.controller('UserFormController', require('./UserFormController'));

privatespaceModule.controller('HospitalInfoController', require('./modals/HospitalInfoController'));
privatespaceModule.controller('LandingSearchController', require('./modals/LandingSearchController'));

privatespaceModule.controller('HealthCenterListController', require('./HealthCenterListController'));
privatespaceModule.controller('HealthCenterFormController', require('./HealthCenterFormController'));