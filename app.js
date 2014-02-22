'use strict';

angular.module('app', [])
  .controller('FriendsCtrl', function ($scope, $http) {
    $scope.getFriends = function () {
      $http.get('api/friends').success(function (data) {
        $scope.friends = data;
      }).error(function () {
        alert('PANIC! An error occured!');
      });
    };
  });
