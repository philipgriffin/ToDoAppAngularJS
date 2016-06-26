angular.module('toDoApp')
    .directive('todo', todo);

function todo() {
    return {
        restrict: 'E',
        templateUrl: 'todo-item.html'
    };
}