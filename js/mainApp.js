var app = angular.module('toDoApp', []);
app.controller('MainController', ['$scope', MainController]);

function MainController($scope) {
  $scope.list = {
  listTitle: "My List",
  todos : [
  {
      id: 0,
      text: 'I have to do stuff',
      completed: 0
    },
    {
      id: 1,
      text: 'And do things',
      completed: 0
    }]
    };

    $scope.addTodo = function() {
        $scope.list.todos.push({
              id: $scope.list.todos.length,
              text: 'Type stuff here',
              completed: 0
        });
    }
 }