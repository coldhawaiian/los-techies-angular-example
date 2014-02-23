'use strict';

angular.module('app', [])
  .controller('PersonCtrl', function ($scope) {
    $scope.persons = [
      {
        name: { first: 'Henry', middle: 'Jacob', last: 'Mendocino' },
        gender: 'Male'
      },
      {
        name: { first: 'Ann', middle: 'Cecilia', last: 'Negro' },
        gender: 'Female'
      },
      {
        name: { first: 'Berta', middle: 'Ann', last: 'Sallyfield' },
        gender: 'Female'
      },
      {
        name: { first: 'Rudolf', middle: 'John', last: 'Waters' },
        gender: 'Male'
      },
      {
        name: { first: 'Ken', middle: 'Adam', last: 'Aundry' },
        gender: 'Male'
      }
    ];
  })
  .controller('SurveyCtrl', function ($scope) {
    $scope.questions = [
      { number: '1', question: 'How old are you?', type: 'integer' },
      { number: '2', question: 'Date of birth?', type: 'date' },
      { number: '3', question: 'Describe yourself in a few words.', type: 'text' },
      { number: '4', question: 'What is your favorite color?', type: 'singleOption' },
      { number: '5', question: 'Which of the following sweets do you like?', type: 'multiOption'}
    ];
  });
