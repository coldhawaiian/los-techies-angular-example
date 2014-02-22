'use strict';

angular.module('app', [])
  .controller('FirstCtrl', function ($scope) {
    $scope.model = {
      firstName: 'Keoki',
      lastName: 'Zee'
    };
    $scope.alert = function (name) {
      alert('Hello ' + name);
    };
  });
