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
  })
  .controller('TreeCtrl', function ($scope) {
    $scope.tree = [
      {
        name: 'Parent 1',
        children: [
          {
            name: 'Child 1.1',
            children: [
              { name: 'Grandchild 1.1.1' },
              { name: 'Grandchild 1.1.2' },
              { name: 'Grandchild 1.1.3' }
            ]
          },
          { name: 'Child 1.2' },
          { name: 'Child 1.3' }
        ]
      },
      {
        name: 'Parent 2',
        children: [
          { name: 'Child 2.1' },
          { name: 'Child 2.2' },
          { name: 'Child 2.3' }
        ]
      },
      { name: 'Parent 3' },
      { name: 'Parent 4' },
      { name: 'Parent 5' }
    ];
  });
