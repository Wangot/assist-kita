'use strict';

angular.module('app.privatespace').directive('TestDirective', function(WizardStepService, $location) {

  return {
    restrict: 'E',
    templateUrl: '/views/partials/directives/test-directive.html',
    link: function(scope, el, attr) {
    }
  }
});