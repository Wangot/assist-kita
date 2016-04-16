/**
 *
 */
 'use strict';

var angular = require('angular');
var PublicModuleBaseController = require('../base/PublicModuleBaseController');
var CoreObjectUtilities = require('../../core/utilities/CoreObjectUtilities');

function landingController($routeParams, geolocation, $scope, $uibModal) {
  PublicModuleBaseController.call(this);

  var vm = this;

    geolocation.getLocation()
    .then(function(data){
      var coords = {
        lat: data.coords.latitude,
        lng: data.coords.longitude
      };

      vm.center = {
          lat: data.coords.latitude,
          lng: data.coords.longitude,
          zoom: 17
      };

      vm.markers.mainMarker.lat = data.coords.latitude;
      vm.markers.mainMarker.lng = data.coords.longitude;

    },
    function() {
      var coords = {
        lat: 59.91529985112055,
        lng: 10.749062717187485
      };

      _initMarker(coords);
    }); 


	function _initMarker(mainMarker) {

    console.log(mainMarker);

	    mainMarker.focus = true;
	    mainMarker.message = "Hello world";
	    mainMarker.draggable = true;

  }

  var mainMarker = {
    focus: true,
    message: 'test',
    draggable: true,
    lat: 59.91529985112055,
    lng: 10.749062717187485    
  }

 angular.extend(this, {
      center: {
          lat: mainMarker.lat,
          lng: mainMarker.lng,
          zoom: 8
      },
      markers: {
          mainMarker: angular.copy(mainMarker)
      },
      position: {
          lat: 51,
          lng: 0
      },
      events: { // or just {} //all events
          markers:{
            enable: [ 'dragend' ]
            //logic: 'emit'
          }
      }
  });


	$scope.$on("leafletDirectiveMarker.dragend", function(event, args){
	        vm.position.lat = args.model.lat;
	        vm.position.lng = args.model.lng;
	});

  vm.openSearchModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/landingSearch.ejs',
      controller: 'LandingSearchController',
      controllerAs: 'vm',
      resolve: {
      }
    });

    modalInstance.result
    .then(function () {

    }, function () {

    });
  }
  

    /*

   var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': address},
        function (results, status) {
          var ret = {};

          if (results.length > 0) {
            var locationResult = results[0].geometry.location;
            var location = {
                latitude: locationResult.lat(),
                longitude: locationResult.lng(),
            };

            ret = {
              location: location,
              zoom: 18,
            }
          } else {
            // alert('Address not found');

            // move to oslo norway
            var location = {
              latitude: 59.91529985112055,
              longitude: 10.749062717187485
            };

                            
          }

        });
*/
}

CoreObjectUtilities.inherit(landingController, PublicModuleBaseController);

angular.extend(landingController.prototype, {});

module.exports = landingController;