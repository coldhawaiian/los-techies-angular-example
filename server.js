'use strict';
var restify = require('restify');

var server = restify.createServer();
var tasks = [
  { name: 'Task 1', dueDate: '01/02/2014' },
  { name: 'Task 2', dueDate: '01/03/2014' },
  { name: 'Task 3', dueDate: '01/04/2014' }
];

server.get('/tasks', function (request, response, next) {
  response.send(tasks);
  return next();
});

server.get('/tasks/:id', function (request, response, next) {
  // Task id < 0 OR > # of tasks?
  if (request.params.id < 0 || request.params.id > tasks.length) {
    return next(new restify.InvalidArgumentError('Task does not exist.'));
  }
  response.send(tasks[request.params.id]);
  return next();
});

server.listen(8080, 'localhost', function () {
  console.log('%s listening at %s \u2665', server.name, server.url); // ♥
});
