'use strict';

angular.module('app.privatespace').config([
'$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/ticket', {
      templateUrl: '/views/privatespace/tickets-list.html',
      controller: 'TicketController',
      controllerAs: 'vm'
  })
  .when('/ticket/:id', {
      templateUrl: '/views/privatespace/tickets-form.html',
      controller: 'TicketFormController',
      controllerAs: 'vm'
  })
  .when('/user', {
      templateUrl: '/views/privatespace/user-list.html',
      controller: 'UserController',
      controllerAs: 'vm'
  })
  .when('/user/add', {
      templateUrl: '/views/privatespace/user-form.html',
      controller: 'UserFormController',
      controllerAs: 'vm'
  })  
  .when('/user/:id', {
      templateUrl: '/views/privatespace/user-form.html',
      controller: 'UserFormController',
      controllerAs: 'vm'
  })
  .when('/health-center', {
      templateUrl: '/views/privatespace/health-center-list.html',
      controller: 'HealthCenterListController',
      controllerAs: 'vm'
  })  
  .when('/health-center/:id', {
      templateUrl: '/views/privatespace/health-center-form.html',
      controller: 'HealthCenterFormController',
      controllerAs: 'vm'
  })
  // .otherwise({
  //     redirectTo: '/ticket'
  // });
}
]);