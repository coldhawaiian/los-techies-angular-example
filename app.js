'use strict';

angular.module('app', [])
  .controller('TaskListCtrl', function ($scope, $http) {
    $http.get('api/tasks').success(function (data) {
      $scope.tasks = data;
    });

    $scope.refresh = function () {
      $http.get('api/tasks').success(function (data) {
        $scope.tasks = data;
      });
    };
  });
