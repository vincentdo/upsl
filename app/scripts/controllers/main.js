'use strict';

angular.module('upslApp')
  .controller('MainController', function ($scope) {
    $scope.week =     
      {
        number: 4,
        matches:
        [
          {
            team1: "Jiji's Kittens",
            team2: "CLG HYPE TRAIN",
            date: "6/26/2014",
            time: "11:00 PM"
          }
        ]
      };
  });
