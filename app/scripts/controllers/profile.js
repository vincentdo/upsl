'use strict';

angular.module('upslApp')
  .controller('PrimaryRoleCtrl', function ($scope) {
    
    $scope.roles = [
      {name : 'ADC'},
      {name : 'Mid'},
      {name : 'Top'},
      {name : 'Jungle'},
      {name : 'Support'}
    ];

    $scope.primaryRole = $scope.roles[0];
    $scope.secondaryRole = $scope.roles[1];


    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropDown = function($event) {
      $event.precentDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
    
  });