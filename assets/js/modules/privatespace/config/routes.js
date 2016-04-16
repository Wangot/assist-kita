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
  .when('/user/:id', {
      templateUrl: '/views/privatespace/user-form.html',
      controller: 'UserFormController',
      controllerAs: 'vm'
  })  
  // .otherwise({
  //     redirectTo: '/ticket'
  // });
}
]);