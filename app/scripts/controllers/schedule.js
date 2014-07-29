'use strict';

angular.module('upslApp')
  .controller('ScheduleController', function ($scope, $firebase) {
    var url = "https://burning-fire-5202.firebaseio.com/games";
    // var date = Date.now();
    // console.log(date);
    // var count = Date.parse(new Date());
    // console.log(count);
    $scope.games = $firebase(new Firebase(url).startAt(Date.now()));
    // console.log(moment(count).format('MMMM Do YYYY, h:mm:ss a'));
    // ref.$on('loaded', function() {
    //   $scope.games = ref;
    //   var names = $scope.games.$getIndex();
    //   // console.log(moment($scope.games[names[0]].$priority).format('MMMM Do YYYY, h:mm:ss a'));
    //   // console.log(moment($scope.games[names[1]].$priority).format('MMMM Do YYYY, h:mm:ss a'));    
    //   // console.log(moment($scope.games[names[2]].$priority).format('MMMM Do YYYY, h:mm:ss a'));
    // })
    
  });