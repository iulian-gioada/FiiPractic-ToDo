angular.module('todo', []);

angular.module('todo')
    .controller('todoController', function ($scope) {
        $scope.title = 'Fii Practic To Do List';
        $scope.addItem = '';
        $scope.items = [
            'To do 1',
            'To do 2'
        ];
    
        $scope.addNewItem = function addNewItem () {
            
        };
    });