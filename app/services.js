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
           item.dueDate = new Date(item.dueDate);
           items.push(item);
       };
       
       return {
           createItem: createItem,
           getItems: getItems,
           addNewItem: addNewItem
       } 
    });