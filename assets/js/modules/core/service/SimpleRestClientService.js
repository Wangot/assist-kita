'use strict';

var angular = require('angular');

function SimpleRestClientService($q, $resource, SimpleRestResultFilter) {
    return function(model){
        var obj = $resource('/api/'+ model +'/:id', {id: '@id'}, {});

        return {
            get : function(params){
                var deferred = $q.defer();
                obj.get(
                    params, 
                    function(ret){
                        SimpleRestResultFilter.sanitize(ret).then(function(data){
                            deferred.resolve(data)
                        })
                    }, 
                    function(response) {
                        console.log("fail: ", response.status)
                        // Notification.error(response)
                    }
                )

                return deferred.promise;
            },
            save: function(params){
                var deferred = $q.defer();
                obj.save(
                    params, 
                    function(ret){
                        SimpleRestResultFilter.sanitize(ret).then(function(data){
                            deferred.resolve(data)
                        }, function(res) {
                          deferred.reject(res);
                        })
                    }, 
                    function(response) {
                        console.log("fail: ", response.status);
                         deferred.reject(response);
                        // Notification.error(response);
                    }
                )

                return deferred.promise;
            }
        }
    }
}


angular.extend(SimpleRestClientService.prototype, {

});

module.exports = SimpleRestClientService;