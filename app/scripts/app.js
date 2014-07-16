'use strict';

angular
  .module('upslApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
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
      .otherwise({
        redirectTo: '/'
      });
  });
