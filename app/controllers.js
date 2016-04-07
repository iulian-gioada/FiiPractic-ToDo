angular.module('todo')
    .controller('todoController', function ($scope, todoItemsFactory) {
        $scope.title = 'Fii Practic To Do List';
        $scope.addItem = todoItemsFactory.createItem();

        $scope.itemsFactory = todoItemsFactory;
        
        $scope.addNewItem = function addNewItem() {
            todoItemsFactory.addNewItem($scope.addItem);
            $scope.addItem = todoItemsFactory.createItem();
        }
    });