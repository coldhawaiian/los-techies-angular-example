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
  })
  .controller('ParentCtrl', function ($scope) {
    $scope.model = { title: "Title set by parent" };
    $scope.greet = function () {
      alert("Hi, I'm the parent!");
    };
  })
  .controller('ChildCtrl', function ($scope) {
    $scope.content = "Content set by child";
    $scope.greet = function () {
      alert("Hi, I'm the child!");
    };
    $scope.setModel = function () {
      $scope.model = { title: "Test from child!" };
    };
  });
