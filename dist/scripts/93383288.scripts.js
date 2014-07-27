"use strict";angular.module("upslApp",["ngCookies","ngResource","ngSanitize","ngRoute","firebase","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html"}).when("/roster",{templateUrl:"views/roster.html",controller:"RosterController"}).when("/schedule",{templateUrl:"views/schedule.html",controller:"ScheduleController"}).when("/actions",{templateUrl:"views/actions.html",controller:"ActionsController"}).when("/analysis",{templateUrl:"views/gameAnalysis.html"}).when("/playoffs",{templateUrl:"views/playoffs.html"}).when("/profile",{templateUrl:"views/profile.html"}).otherwise({redirectTo:"/"})}]),angular.module("upslApp").controller("ModalInstanceCtrl",["$scope","$modalInstance","$firebaseSimpleLogin",function(a,b,c){a.input={},a.signup=function(){var d=new Firebase("https://burning-fire-5202.firebaseio.com"),e=c(d);e.$createUser(a.input.email,a.input.password).then(function(){b.close("success")},function(){b.dimiss("failed")})},a.cancel=function(){b.dismiss("cancel")}}]).controller("RegisterModalController",["$scope","$modal",function(a,b){a.open=function(){var a=b.open({templateUrl:"views/register.html",controller:"ModalInstanceCtrl",size:"lg"});a.result.then(function(){},function(){})}}]),angular.module("upslApp").controller("RosterController",["$scope","$firebase",function(a,b){var c="https://burning-fire-5202.firebaseio.com/teams";a.ready=!1,a.teams=b(new Firebase(c)),a.teams.$on("loaded",function(){a.ready=!0})}]),angular.module("upslApp").controller("ScheduleController",["$scope",function(a){a.weeks=[{number:1,matches:[{team1:"CLG Hype Train",team2:"CLG Hype Train Jr"},{team1:"Jiji's Kittens",team2:"PANDAMANIACS"}]}]}]),angular.module("upslApp").controller("ActionsController",["$scope",function(a){a.week=[]}]),angular.module("upslApp").controller("PrimaryRoleCtrl",["$scope",function(a){a.roles=[{name:"ADC"},{name:"Mid"},{name:"Top"},{name:"Jungle"},{name:"Support"}],a.primaryRole=a.roles[0],a.secondaryRole=a.roles[1],a.status={isopen:!1},a.toggled=function(a){console.log("Dropdown is now: ",a)},a.toggleDropDown=function(b){b.precentDefault(),b.stopPropagation(),a.status.isopen=!a.status.isopen}}]);