'use strict';

angular.module('upslApp')
  .controller('RosterController', ['$scope', '$firebase', 
    function ($scope, $firebase) {
      var url = "https://burning-fire-5202.firebaseio.com/teams";
      $scope.teams = $firebase(new Firebase(url)); 
    }   
  ]);
