'use strict';

angular.module('upslApp')
  .controller('RosterController', ['$scope', '$firebase', 
    function ($scope, $firebase) {
      var url = "https://burning-fire-5202.firebaseio.com/teams";
      $scope.ready = false;
      $scope.teams = $firebase(new Firebase(url)); 
      $scope.teams.$on("loaded", function() {
        $scope.ready = true;        
      });
    }   
  ]);
