'use strict';

angular.module('app', [])
  .controller('TaskListCtrl', function ($scope, $http) {
    getTasks();

    $scope.refresh = function () {
      getTasks();
    };

    function getTasks () {
      $http.get('tasks.json').success(function (data) {
        $scope.tasks = data;
      });
    }
  })
  .controller('NewTaskCtrl', function ($scope, $http) {
    $scope.taskName = null;
    $scope.createTask = function () {
      var data = { name: $scope.taskName };
      $http.post('api/tasks', data).success(function (data, status, headers) {
        alert('Task added!');
        $http.get(headers('location')).success(function (data) {
          $scope.tasks.push(data);
        });
      });
    };
  });
