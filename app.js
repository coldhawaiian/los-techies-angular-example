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
    $scope.title = "Title set by parent";
  })
  .controller('ChildCtrl', function ($scope) {
    $scope.content = "Content set by child";
  });
