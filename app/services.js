angular.module('todo')
    .factory('todoItemsFactory', itemsFactory)
    .factory('categoriesFactory', categoriesFactory);
    
    function itemsFactory() {
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
    };
    
    
    function categoriesFactory(){
        var initialCategories = ['Home', 'Work', 'Extra'];
        
        return {
            getCategories: getCategories,
            addNewCategory: addNewCategory
        };
        
        function getCategories(){
            return initialCategories;
        }
        
        function addNewCategory (item) {
           initialCategories.push(item);
       };
    }