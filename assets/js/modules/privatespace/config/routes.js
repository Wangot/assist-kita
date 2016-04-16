'use strict';

angular.module('app.privatespace').config([
'$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/test', {
      templateUrl: '/views/privatespace/test.html',
      controller: 'TestController',
      controllerAs: 'vm',
      resolve: {
      }
  })
  .otherwise({
      redirectTo: '/test'
  });

  // $locationProvider.html5Mode(true).hashPrefix('!');
  // $locationProvider.html5Mode(true);
}
