'use strict';

var angular = require('angular');

function SimpleRestResultFilter($q, Notification) {
    this.sanitize = function(params){
        var deferred = $q.defer();
        if(params.status == "success"){
            if(params.message != ""){
                // Notification.success(params.message)
                console.log(params.message)
            } 
          deferred.resolve(params.data || {})
        }else{
            Notification.error(params.message)
            deferred.reject(params || {})
        }


        return deferred.promise;
    }
}


angular.extend(SimpleRestResultFilter.prototype, {

});

module.exports = SimpleRestResultFilter;