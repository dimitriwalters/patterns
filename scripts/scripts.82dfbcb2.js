"use strict";angular.module("jsPatternsApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html"}).otherwise({redirectTo:"/"})}]),angular.module("jsPatternsApp").controller("MainCtrl",["$scope",function(a){a.tab=0}]);