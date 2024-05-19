function Todo(name, type, complexity, duration = 120) {
    this.name = name;
    this.type = type;
    this.complexity = complexity;
    this.duration = duration;
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
    console.warn("Todo List:");
    todoList.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.type} - ${item.complexity}`);
    });
}

function displayTodosByType(type) {
    console.warn(`Todo with type ${type}:`);
    todoList.filter(todo => todo.type === type)
        .forEach(todo => console.log(`${todo.name} - ${todo.complexity}`));
}

function displayTodosByComplexity(complexity) {
    console.warn(`Todo with complexity ${complexity}:`);
    todoList.filter(todo => todo.complexity === complexity)
        .forEach(todo => console.log(`${todo.name} - ${todo.type}`));
}

function sortByComplexity() {
    console.warn(`Todo sorted by complexity`);
    todoList.sort((first, second) => first.complexity - second.complexity)
        .forEach(todo => console.log(`${todo.complexity} - ${todo.name} - ${todo.type}`));
}

function checkWarnings() {
    let result = todoList.length >= 10 || todoList.some(e => e.complexity >= 10) ? 'yes' : 'no';
    console.warn(`Are there problematic tasks? ${result}`);
}

function sumDuration() {
    console.warn(`Total time needed (h): ${todoList.map(e => e.duration / 60).reduce((a, b) => a + b, 0)}`);
}

addTodo(new Todo("Buy groceries", 'Shopping', 1, 60));
addTodo(new Todo("Call mom", 'Personal', 2));
addTodo(new Todo("Do laundry", 'Home', 5));
addTodo(new Todo("Buy meat", 'Shopping', 2));

checkWarnings();

displayTodos();
displayTodosByType('Shopping');
displayTodosByType('Home');
displayTodosByType('Personal');
displayTodosByComplexity(1);
displayTodosByComplexity(2);
displayTodosByComplexity(3);
sortByComplexity()
sumDuration();

deleteTodoByName("Do laundry");
displayTodos();
