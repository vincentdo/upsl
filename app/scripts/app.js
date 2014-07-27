'use strict';

// Parse.initialize("OeaMN5nXQDa5gEy2w18ZCd2nu1rwMiTCbiA8hH5b", "EJlzZ9KVTnWOFxoE1DerRBYWj5pMIHyjDVoRDfIM");

angular
  .module('upslApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ui.bootstrap'
  ])  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        // controller: 'Demo'
      })
      .when('/roster', {
        templateUrl: 'views/roster.html',
        controller: 'RosterController'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleController'
      })
      .when('/actions', {
        templateUrl: 'views/actions.html',
        controller: 'ActionsController'
      })
      .when('/analysis', {
        templateUrl: 'views/gameAnalysis.html'
      })
      .when('/playoffs', {
        templateUrl: 'views/playoffs.html'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });


