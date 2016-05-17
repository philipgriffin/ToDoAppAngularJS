angular.module('toDoApp')
    .controller('MainController', ['$scope', 'SessionManagement', MainController]);

function MainController($scope, SessionManagement) {

    if(localStorage.test) {
        $scope.list = JSON.parse(localStorage.test);
    } else {
        $scope.list = {
            listTitle: "My List",
            todos : [
            ]};
    }

    $scope.save = function() {
        localStorage.test = JSON.stringify($scope.list);
        console.log(JSON.stringify($scope.list));
        $('input[type="text"]').blur();
    };

    $scope.addTodo = function() {
        var newId = $scope.list.todos.length;
        $scope.list.todos.push({
            id: newId,
            text: '',
            completed: false
        });
        //$scope.animateCard(100);
    };

    $scope.deleteTask = function(taskNumber) {
        $scope.list.todos.splice(taskNumber, 1);
        localStorage.test = JSON.stringify($scope.list);
        //$scope.animateCard(-20);
    };

//    $scope.animateCard = function(val) {
//        var cardContent = $('.card-content'),
//            cardContentHeight = cardContent.height(),
//            heightToBeAdded = cardContentHeight + val;
//        cardContent.styles({'height': (heightToBeAdded) });
//    }
}