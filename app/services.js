angular.module('todo')
    .factory('todoItemsFactory', function () {
       var items = [];
       
       function createItem() {
           return {
               title: '',
               description: '',
               complete: false,
               dueDate: '',
               category: ''
           }
       }
       
       function getItems() {
           return items;
       }
       
       function addNewItem (item) {
           items.push(item);
       };
       
       return {
           createItem: createItem,
           getItems: getItems,
           addNewItem: addNewItem
       } 
    });