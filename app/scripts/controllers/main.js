'use strict';

angular.module('upslApp')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, $firebaseSimpleLogin) {
    $scope.input = {}
    $scope.signup = function () {
      // console.log($scope.input);
      var ref = new Firebase("https://burning-fire-5202.firebaseio.com");
      var loginObj = $firebaseSimpleLogin(ref);
      loginObj.$createUser($scope.input.email, $scope.input.password).then(function(){
        $modalInstance.close('success'); 
      }, function() {
        $modalInstance.dimiss('failed');
      });         
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  })

  .controller('RegisterModalController', function ($scope, $modal) {
    $scope.open = function () {
      var modalInstance = $modal.open({
        templateUrl: 'views/register.html',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        
      });

      modalInstance.result.then( function(status) {
        // Do something interesting
      }, function(err) {
        // Error condition
      });
    };
  });

  
