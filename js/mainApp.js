angular.module('toDoApp', [])
.controller('MainController', ['$scope', MainController]);


function MainController($scope) {
    $scope.save = function() {
        // save to do
        console.log($scope.list);
        $('input[type="text"]').blur();
    }

    $scope.list = {
    listTitle: "My List",
    todos : [
    ]};

    $scope.addTodo = function() {
    var newId = $scope.list.todos.length;
        $scope.list.todos.push({
              id: newId,
              text: '',
              completed: 0
        });
        var cardContent = $('.card-content'),
            cardContentHeight = cardContent.height(),
            heightToBeAdded = cardContentHeight + 100;
            cardContent.css({'height': (heightToBeAdded) });
    }
 }