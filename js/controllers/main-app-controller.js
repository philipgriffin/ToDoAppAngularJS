angular.module('toDoApp')
    .controller('MainController', ['$scope', '$localStorage', MainController]);

function MainController($scope, $localStorage) {
    $scope.$storage = $localStorage;
    console.log($scope.$storage.test);

    if ($scope.$storage.list) {
        $scope.$storage.list = $scope.$storage.list;
    } else {
        $scope.$storage.list = [
            {
                listTitle: "My List 1",
                todos: []
            }];
    }

    $scope.addTodo = function (list) {
        var newId = list.todos.length;
        list.todos.push({
            id: newId,
            text: '',
            completed: false
        });
        //$scope.animateCard(100);
    };

    $scope.deleteTask = function (list, task) {
        var todoIndex = list.todos.indexOf(task);
        list.todos.splice(todoIndex, 1);
        //$scope.animateCard(-20);
    };

//    $scope.animateCard = function(val) {
//        var cardContent = $('.card-content'),
//            cardContentHeight = cardContent.height(),
//            heightToBeAdded = cardContentHeight + val;
//        cardContent.styles({'height': (heightToBeAdded) });
//    }
}