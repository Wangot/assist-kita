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

      vm.markers.m1.lat = data.coords.latitude;
      vm.markers.m1.lng = data.coords.longitude;

      vm.markers.m2.lat = data.coords.latitude + 0.005;
      vm.markers.m2.lng = data.coords.longitude + 0.005;
      vm.markers.m2.icon = {
        iconUrl: 'images/medicine.png',
        // shadowUrl: 'img/leaf-shadow.png',
        iconSize:     [38, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 80], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    }

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
    lng: 10.749062717187485,
    icon: {
        iconUrl: 'images/hospital.png',
        // shadowUrl: 'img/leaf-shadow.png',
        iconSize:     [38, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 80], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    }
  }

 angular.extend(this, {
      center: {
          lat: mainMarker.lat,
          lng: mainMarker.lng,
          zoom: 8
      },
      markers: {
          m1: angular.copy(mainMarker),
          m2: angular.copy(mainMarker)
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