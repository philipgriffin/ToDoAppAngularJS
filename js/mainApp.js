var app = angular.module('toDoApp', []);
app.controller('MainController', ['$scope', MainController]);

app.directive('initFocus', function() {
        var timer;

        return function(scope, elm, attr) {
            if (timer) clearTimeout(timer);

            timer = setTimeout(function() {
                elm.focus();
                console.log('focus', elm);
            }, 0);
        };
    });

function MainController($scope) {
  $scope.list = {
  listTitle: "My List",
  todos : [
  ]};

    $scope.addTodo = function() {
    var newId = $scope.list.todos.length;
        $scope.list.todos.push({
              id: newId,
              text: 'Type stuff here',
              completed: 0
        });
         $('#todoInput2').focus();



         console.log(newId);
         //Materialize.toast('New task added!', 2000) // 4000 is the duration of the toast
    }
 }