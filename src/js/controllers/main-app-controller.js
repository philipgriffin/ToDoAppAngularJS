angular.module('toDoApp')
    .controller('MainController', ['$scope', '$localStorage', MainController]);

function MainController($scope, $localStorage) {

    $scope.$storage = $localStorage;
    if($scope.$storage.backgroundImage) {
        $('body').css('background', 'url("'+ $scope.$storage.backgroundImage +'")');
    }
    $scope.changeBackground = function(imageUrl) {
        console.log(imageUrl);
        $('body').css('background', 'url("'+ imageUrl +'")');
        $scope.$storage.backgroundImage = imageUrl;
    };


    $scope.settings = {
        backgroundImages: [
            {
                imageName: "school",
                imageUrl: "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/school.png"
            },
            {
                imageName: "restaurant",
                imageUrl: "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/restaurant.png"
            },
            {
                imageName: "weather",
                imageUrl: "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/weather.png"
            },
            {
                imageName: "Pentagon",
                imageUrl: "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/congruent_pentagon.png"
            },
            {
                imageName: "Pink Rice",
                imageUrl: "http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/pink_rice.png"
            }

        ]
    };

    if ($scope.$storage.list) {
        $scope.$storage.list = $scope.$storage.list;
    } else {
        $scope.$storage.list = [
            {
                listTitle: "List Title",
                todos: []
            }];
        $('#modal1').openModal();
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


    $scope.addList = function () {
        $scope.$storage.list.push({
            listTitle: "List Title",
            todos: []
        });
        //$scope.animateCard(100);
        if (!$('.toast').length) {
            Materialize.toast('New list added!', 2000);
        }
    };

    
    $scope.deleteTask = function (list, task) {
        var todoIndex = list.todos.indexOf(task);
        list.todos.splice(todoIndex, 1);
        //$scope.animateCard(-20);
    };

    $scope.confirmDialog = function(item) {
        $('#modalDel').openModal();
        $scope.listToDelete = item;
    };

    $scope.delList = function () {
        var listIndex = $scope.$storage.list.indexOf($scope.listToDelete);
        $scope.$storage.list.splice(listIndex, 1);
        if (!$('.toast').length) {
            console.log('showing');
            Materialize.toast('List removed!', 2000);
        }
    };

//    $scope.animateCard = function(val) {
//        var cardContent = $('.card-content'),
//            cardContentHeight = cardContent.height(),
//            heightToBeAdded = cardContentHeight + val;
//        cardContent.styles({'height': (heightToBeAdded) });
//    }
}