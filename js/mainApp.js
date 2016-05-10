angular.module('toDoApp', [])
.controller('MainController', ['$scope', MainController]);

function MainController($scope) {
    $scope.list = {
        listTitle: "My List",
        todos : [
    ]};

    $scope.save = function() {
        // save to do
        console.log($scope.list);
        $('input[type="text"]').blur();
    }

    $scope.addTodo = function() {
    var newId = $scope.list.todos.length;
        $scope.list.todos.push({
              id: newId,
              text: '',
              completed: false
        });
        $scope.animateCard(100);
    }

    $scope.deleteTask = function(taskNumber) {
        $scope.list.todos.splice(taskNumber, 1);
        $scope.animateCard(-20);
    }

    $scope.animateCard = function(val) {
        var cardContent = $('.card-content'),
            cardContentHeight = cardContent.height(),
            heightToBeAdded = cardContentHeight + val;
        cardContent.css({'height': (heightToBeAdded) });
    }

    $scope.enableInput = function() {
        console.log('test');
    }
 }