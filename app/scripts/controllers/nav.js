'use strict';

angular.module('jsPatternsApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.isLocation = function (url) {
      return $location.path() === url;
    };
  });
