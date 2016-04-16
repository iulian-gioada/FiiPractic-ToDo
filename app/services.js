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

    function addNewItem(item) {
        item.dueDate = new Date(item.dueDate);        
        items.push(item);
    };
    
    function removeItem(index) {
        items.splice(index, 1);
    }

    return {
        createItem: createItem,
        getItems: getItems,
        addNewItem: addNewItem,
        removeItem: removeItem
    }
};


function categoriesFactory() {
    var initialCategories = ['Home', 'Work', 'Extra'];

    return {
        getCategories: getCategories,
        addNewCategory: addNewCategory
    };

    function getCategories() {
        return initialCategories;
    }

    function addNewCategory(item) {
        initialCategories.push(item);
    };
}
