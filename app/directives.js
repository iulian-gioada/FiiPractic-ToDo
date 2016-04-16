angular.module('todo')
    .directive('todoItem', function () {
        return {
            restrict: 'A',
            scope: {
                item: '=',
                index: '=',
                removeFn: '&'
            },
            templateUrl: 'templates/itemTemplate.html',
            controller: function ($scope, $element) {
                      
            }
        }
    });