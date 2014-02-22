'use strict';

angular.module('app', [])
  .controller('PersonCtrl', function ($scope) {
    $scope.persons = [{
      name: { first: 'Henry', middle: 'Jacob', last: 'Mendocino' },
      gender: 'Male'
    }, {
      name: { first: 'Ann', middle: 'Cecilia', last: 'Negro' },
      gender: 'Female'
    }, {
      name: { first: 'Berta', middle: 'Ann', last: 'Sallyfield' },
      gender: 'Female'
    }, {
      name: { first: 'Rudolf', middle: 'John', last: 'Waters' },
      gender: 'Male'
    }, {
      name: { first: 'Ken', middle: 'Adam', last: 'Aundry' },
      gender: 'Male'
    }];
  });
