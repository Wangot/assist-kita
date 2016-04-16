/**
 *
 */

//var _ = require('underscore');
var angular = require('angular');

function CoreModuleBaseService($q) {

  // throws reject from specific promise
  // it must have
  // * message
  // * errors (array)
  this.throwReject = function(err) {
    var def = $q.defer();
    def.reject(err);
    return def.promise;
  }
}

angular.extend(CoreModuleBaseService.prototype, {

});

module.exports = CoreModuleBaseService;