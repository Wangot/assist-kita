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

    // geolocation.getLocation()
    // .then(function(data){
    //   var coords = {
    //     lat: data.coords.latitude,
    //     lng: data.coords.longitude
    //   };

    //   console.log(data.coords.latitude);
    //   console.log(data.coords.longitude);

    //   vm.center = {
    //       lat: data.coords.latitude,
    //       lng: data.coords.longitude,
    //       zoom: 17
    //   };

    //   vm.markers.m1.lat = data.coords.latitude;
    //   vm.markers.m1.lng = data.coords.longitude;

    //   vm.markers.m2.lat = data.coords.latitude + 0.005;
    //   vm.markers.m2.lng = data.coords.longitude + 0.005;
    //   vm.markers.m2.icon = {
    //     iconUrl: 'images/medicine.png',
    //     // shadowUrl: 'img/leaf-shadow.png',
    //     iconSize:     [38, 50], // size of the icon
    //     shadowSize:   [50, 64], // size of the shadow
    //     iconAnchor:   [22, 80], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    // }
    // vm.markers.message = 'test1';

    // },
    // function() {
    //   var coords = {
    //     lat: 59.91529985112055,
    //     lng: 10.749062717187485
    //   };

    //   _initMarker(coords);
    // }); 


  var m1 = {
    focus: true,
    message: 'Your here!',
    draggable: true,
    lat: 14.5516526,
    lng: 121.01868019999999
  }

  vm.openHospitalModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/hospitalInfo.ejs',
      controller: 'HospitalInfoController',
      controllerAs: 'vm',
      resolve: {
      }
    });
  }

  vm.openCenterModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/healthCenterInfo.ejs',
      controller: 'HospitalInfoController',
      controllerAs: 'vm',
      resolve: {
      }
    });
  }  

  var m2 = {
    message: 'Makati Med <br/><a href="" ng-click="vm.openHospitalModal()">View Details</a>',
    getMessageScope: function() { return $scope; },
    draggable: false,
    lat: 14.554425591971786,
    lng: 121.00449085235596,
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

  var m3 = {
    message: 'Mercury Drug',
    draggable: false,
    lat: 14.560656228547455,
    lng: 121.02925300598146,
    icon: {
        iconUrl: 'images/medicine.png',
        // shadowUrl: 'img/leaf-shadow.png',
        iconSize:     [38, 50], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 80], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    }
  }

  var m4 = {
    message: 'Poblacion Health Center <br/><a href="" ng-click="vm.openCenterModal()">View Details</a>',
    getMessageScope: function() { return $scope; },    
    draggable: false,
    lat: 14.559617801337644,
    lng: 121.02152824401855,
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

  var m5 = {
    message: 'The Generics Pharmacy',
    draggable: false,
    lat: 14.546740897923646,
    lng: 121.01556301116943,
    icon: {
        iconUrl: 'images/medicine.png',
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
          lat: m1.lat,
          lng: m1.lng,
          zoom: 15
      },
      markers: {
          m1: m1,
          m2: m2,
          m3: m3,
          m4: m4,
          m5: m5
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
          console.log(args.model);
	});

  $scope.$on("leafletDirectiveMarker.click", function(event, args){
    console.log(event, args);
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

  vm.openLanguageModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/views/privatespace/modals/languageChoices.ejs',
      controller: 'LandingSearchController',
      controllerAs: 'vm',
      resolve: {
      }
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