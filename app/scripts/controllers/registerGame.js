'use strict';

angular.module('upslApp')
  .controller('RegisterGameCtrl', function ($scope, $firebase) {
    
    var url = "https://burning-fire-5202.firebaseio.com/teams";
    $scope.teams = $firebase(new Firebase(url));
    $scope.data = {};
    
    $scope.submit = function() {
      var dateTime = $scope.data.dateTime;
      var dateTimeCount = Date.parse(dateTime);
      var blue = $scope.blue.name;
      var red = $scope.red.name;
      if (red == blue) return;
      var gamesUrl = "https://burning-fire-5202.firebaseio.com/games";
      var gamesRef = $firebase(new Firebase(gamesUrl));
      gamesRef.$add({
        timestamp : moment(dateTime).format('MMMM Do YYYY, h:mm:ss a'),
        blueTeam: blue,
        redTeam: red
      }).then(function(ref) {
        gamesRef[ref.name()].$priority = dateTimeCount;
        gamesRef.$save(ref.name()).then(function() {
          alert("Game registered");
          window.location.replace("#/schedule");
        });       
      });
    }
  });

