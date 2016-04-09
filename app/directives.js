angular.module('todo')
    .directive('todoItem', function () {
        return {
            restrict: 'A',
            scope: {
                item: '=',
                index: '='
            },
            templateUrl: 'templates/itemTemplate.html',
            controller: function ($scope, $element) {
                console.log($scope.index);    
            }
        }
    });