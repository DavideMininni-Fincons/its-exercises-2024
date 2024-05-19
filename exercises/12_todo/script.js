const todoList = [];

function addTodo(todoItem) {
    todoList.push(todoItem);
}

function deleteTodo(todoItem) {
    const index = todoList.indexOf(todoItem);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log(`Todo item "${todoItem}" deleted.`);
    } else {
        console.log(`Todo item "${todoItem}" not found.`);
    }
}

function displayTodos() {
    console.log("Todo List:");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

addTodo("Buy groceries");
addTodo("Do laundry");
addTodo("Call mom");

displayTodos();

deleteTodo("Do laundry");

displayTodos();
