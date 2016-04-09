angular.module('todo')
    .controller('todoController', function ($scope, todoItemsFactory, categoriesFactory) {
        $scope.title = 'Fii Practic To Do List';
        $scope.addItem = todoItemsFactory.createItem();
        $scope.categoriesList = categoriesFactory.getCategories();

        $scope.itemsFactory = todoItemsFactory;
        
        $scope.addNewItem = function addNewItem() {
            todoItemsFactory.addNewItem($scope.addItem);
            $scope.addItem = todoItemsFactory.createItem();
        }
    })
    .controller('categoriesController', function ($scope, categoriesFactory) {
        $scope.categoriesList = categoriesFactory.getCategories();

        $scope.addNewCategory = function (item){
          categoriesFactory.addNewCategory(item);  
        };
    });