'use strict';

/**
 * @ngdoc function
 * @name jsPatternsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsPatternsApp
 */
angular.module('jsPatternsApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.tab = 0;
    setTimeout(prettyPrint, 1000);
  });
