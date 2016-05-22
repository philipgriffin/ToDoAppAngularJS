angular.module('toDoApp')
    .controller('MainController', ['$scope', '$localStorage', MainController]);

function MainController($scope, $localStorage) {
    $scope.$storage = $localStorage;
    console.log($scope.$storage.test);

    if($scope.$storage.list) {
        $scope.$storage.list = $scope.$storage.list;
    } else {
        $scope.$storage.list = {
            listTitle: "My List",
            todos : [
            ]};
    }

    $scope.addTodo = function() {
        console.log($scope.$storage);
        var newId = $scope.$storage.list.todos.length;
        $scope.$storage.list.todos.push({
            id: newId,
            text: '',
            completed: false
        });
        //$scope.animateCard(100);
    };


    // TODO: Delete function should use indexOf
    $scope.deleteTask = function(task) {
        var index = $scope.$storage.list.todos.indexOf(task);
        $scope.$storage.list.todos.splice(index, 1);
        //$scope.animateCard(-20);
    };

//    $scope.animateCard = function(val) {
//        var cardContent = $('.card-content'),
//            cardContentHeight = cardContent.height(),
//            heightToBeAdded = cardContentHeight + val;
//        cardContent.styles({'height': (heightToBeAdded) });
//    }
}