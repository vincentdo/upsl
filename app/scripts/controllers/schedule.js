'use strict';

angular.module('upslApp')
  .controller('ScheduleController', function ($scope) {
    $scope.weeks = [
      {
        number: 1,
        matches:
        [
          {
            team1: "CLG Hype Train",
            team2: "CLG Hype Train Jr"
          },
          {
            team1: "Jiji's Kittens",
            team2: "PANDAMANIACS"
          }
        ]
      }
    ];
  });