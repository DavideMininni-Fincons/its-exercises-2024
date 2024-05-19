function Todo(name, type, complexity) {
    this.name = name;
    this.type = type;
    this.complexity = complexity;
}

const todoList = [];

function addTodo(todoItem) {
    todoList.push(todoItem);
}

function deleteTodoByName(todoName) {
    const index = todoList.findIndex(todo => todoName === todo.name);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log(`Todo item "${todoName}" deleted.`);
    } else {
        console.log(`Todo item "${todoName}" not found.`);
    }
}

function displayTodos() {
    console.log("Todo List:");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.type} - ${item.complexity}`);
    });
}

function displayTodosByType(type) {
    console.log(`Todo with type ${type}:`);
    todoList.filter(todo => todo.type === type)
        .forEach(todo => console.log(`${todo.name} - ${todo.complexity}`));
}

function displayTodosByComplexity(complexity) {
    console.log(`Todo with complexity ${complexity}:`);
    todoList.filter(todo => todo.complexity === complexity)
        .forEach(todo => console.log(`${todo.name} - ${todo.type}`));
}

function sortByComplexity() {
    console.log(`Todo sorted by complexity`);
    todoList.sort((first, second) => first.complexity - second.complexity)
        .forEach(todo => console.log(`${todo.complexity} - ${todo.name} - ${todo.type}`));
}


addTodo(new Todo("Buy groceries", 'Shopping', 1));
addTodo(new Todo("Call mom", 'Personal', 2));
addTodo(new Todo("Do laundry", 'Home', 5));
addTodo(new Todo("Buy meat", 'Shopping', 2));

displayTodos();
displayTodosByType('Shopping');
displayTodosByType('Home');
displayTodosByType('Personal');
displayTodosByComplexity(1);
displayTodosByComplexity(2);
displayTodosByComplexity(3);
sortByComplexity()

deleteTodoByName("Do laundry");
displayTodos();
