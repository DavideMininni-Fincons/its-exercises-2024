




// function fetchData(callback) {
//     setTimeout(() => callback(null, {id: 1, name: "John"}), 1000);
// }
// function processData(error, data) {
//     error ? console.error("Error:", error) : console.log("Data:", data);
// }
// fetchData(processData);
//
// function fetchRealData(callback) {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => callback(null, data))
//         .catch(error => callback(error, null));
// }
// function processRealData(error, data) {
//     error ? console.error("Error:", error) : console.log("Data:", data);
// }
// fetchRealData(processRealData);




// // sync
// const log = (message) => console.log(message);
// const sum = (a, b, callback) => {
//     let total = a + b;
//     callback(total);
// }
// sum(1, 2, log);
//
// // async
// let data;
// function fetchData() {
//     setTimeout(() => data = {id: 1, name: "John"}, 1000);
// }
//
// fetchData();
// console.log(data);
// // undefined




//
// // Asynchronous function that simulates fetching data from an API
// function fetchData(callback) {
//     // Simulate fetching data asynchronously using fetch API
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json())
//         .then(data => {
//             callback(null, data); // Call the callback function with the data
//         })
//         .catch(error => {
//             callback(error, null); // Call the callback function with the error
//         });
// }
//
// // Callback function to handle fetched data
// function processData(error, data) {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//         console.log("Data:", data);
//     }
// }
//
// // Call the fetchData function and pass processData as a callback
// fetchData(processData);




// const set = new Set().add('A').add('B').add('C');
// for (const setKey of set.keys()) {
//     console.log(setKey);
// }
// // A
// // B
// // C
// for (const setValue of set.values()) {
//     console.log(setValue);
// }
// // A
// // B
// // C
// for (const setEntry of set.entries()) {
//     console.log(setEntry[0], setEntry[1]);
// }
// // A A
// // B B
// // C C
// set.forEach((value, alwaysValue, set) => {
//     console.log(`Set has value ${value}`)
// })
// // Set has value A
// // Set has value B
// // Set has value C





// let set = new Set();
//
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
//
// // set keeps only unique values
// console.log(set.size);
// // 3
//
// for (let user of set) {
//     console.log(user.name);
// }
// // John
// // Pete
// // Mary


// const productMap = new Map();
//
// function add() {
//     const info = prompt('Insert model and rating separated by -');
//     if (info && info.includes('-')){
//         const rating = info.split('-');
//         addProductRating(rating[0].trim(), parseInt(rating[1].trim()));
//         return true;
//     } else {
//         return false;
//     }
// }
//
// function addProductRating(model, rating) {
//     if (productMap.has(model)) {
//         const currentRatings = productMap.get(model);
//         const totalRatings = currentRatings.ratings.length;
//         const newAverageRating = (currentRatings.ratings.reduce((sum, rating) => sum + rating, 0) + rating) / (totalRatings + 1);
//         productMap.set(model, {ratings: [...currentRatings.ratings, rating], averageRating: newAverageRating});
//     } else {
//         productMap.set(model, {ratings: [rating], averageRating: rating});
//     }
// }
//
// let addMore;
// do {
//     addMore = add();
// } while (addMore)
//
// for (const [productKey, productValue] of productMap.entries()) {
//     console.log(`The product ${productKey} has ${productValue.ratings.length} votes: ${productValue.ratings.join(', ')} with an average of ${productValue.averageRating.toFixed(1)}`);
// }
//





// function countWordFrequency(text) {
//     const wordFrequencyMap = new Map();
//     const words = text.split(/\s+/); // Split text into an array of words
//
//     // Iterate through the array of words and update the frequency in the map
//     words.forEach(word => {
//         const lowerCaseWord = word.toLowerCase();
//         if (wordFrequencyMap.has(lowerCaseWord)) {
//             wordFrequencyMap.set(lowerCaseWord, wordFrequencyMap.get(lowerCaseWord) + 1);
//         } else {
//             wordFrequencyMap.set(lowerCaseWord, 1);
//         }
//     });
//
//     return wordFrequencyMap;
// }
//
// // Test the countWordFrequency function
// const text = prompt("Insert text:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor id nisl viverra ultricies.");
// const wordFrequencyMap = countWordFrequency(text);
//
// console.log("Word Frequency Map:");
// wordFrequencyMap.forEach((frequency, word) => {
//     console.log(`${word}: ${frequency}`);
// });





// const map = new Map().set(1, 'A').set(2, 'B').set(3, 'C');
// for (const mapKey of map.keys()) {
//     console.log(mapKey);
// }
// // 1
// // 2
// // 3
// for (const mapValue of map.values()) {
//     console.log(mapValue);
// }
// // A
// // B
// // C
// for (const mapEntry of map.entries()) {
//     console.log(mapEntry[0], mapEntry[1]);
// }
// // 1 "A"
// // 2 "B"
// // 3 "C"
// map.forEach((value, key, map) => {
//     console.log(`Map has key ${key} and value ${value}, also retrieved with get: ${map.get(key)}`)
// })
// // Map has key 1 and value A, also retrieved with get: A
// // Map has key 2 and value B, also retrieved with get: B
// // Map has key 3 and value C, also retrieved with get: C



// const contacts = new Map();
// // adds an element
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// // checks for elements
// contacts.has("Jessie"); // true
// contacts.has("Hilary"); // false
// // retrieves elements
// contacts.get("Hilary"); // undefined
// contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
// contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
// // deletes elements
// contacts.delete("Raymond"); // false
// contacts.delete("Jessie"); // true
// //check size
// console.log(contacts.size); // 1
//
// contacts.clear()
// console.log(contacts.size); // 0





// function calculateAge(birthDate) {
//     const birthYear = parseInt(birthDate.split("-")[0]);
//     const birthMonth = parseInt(birthDate.split("-")[1]);
//     const birthDay = parseInt(birthDate.split("-")[2]);
//
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth() + 1; // Adding 1 to convert from 0-indexed to 1-indexed month
//     const currentDay = currentDate.getDate();
//
//     let ageYears = currentYear - birthYear;
//     let ageMonths = currentMonth - birthMonth;
//     let ageDays = currentDay - birthDay;
//
//     // Adjust for negative ageMonths or ageDays
//     if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
//         ageYears--;
//         ageMonths += 12;
//     }
//     if (ageDays < 0) {
//         ageMonths--;
//         const prevMonthLastDay = new Date(currentYear, currentMonth - 1, 0).getDate(); // Get the last day of the previous month
//         ageDays += prevMonthLastDay;
//     }
//
//     return { years: ageYears, months: ageMonths, days: ageDays };
// }
//
// // Test the calculateAge function
// const birthDate = prompt('Insert birth date: ', '2024-05-07');
// const age = calculateAge(birthDate);
// alert(`Age: ${age.years} years, ${age.months} months, ${age.days} days`);




// function Holiday(title, description, date) {
//     this.title = title;
//     this.description = description;
//     this.date = new Date(date);
// }
//
// const HolidayPlanner = {
//     holidays: [],
//
//     // Function to add a holiday
//     addHoliday: function(holiday) {
//         this.holidays.push(holiday);
//         console.log(`Holiday "${holiday.title}" scheduled for ${holiday.date.toDateString()}`);
//     },
//
//     // Function to remove a holiday
//     removeHoliday: function(title) {
//         const index = this.holidays.findIndex(holiday => holiday.title === title);
//         if (index !== -1) {
//             this.holidays.splice(index, 1);
//             console.log(`Holiday "${title}" removed.`);
//         } else {
//             console.log(`Holiday "${title}" not found.`);
//         }
//     },
//
//     // Function to find holidays
//     findHolidays: function() {
//         console.log(`Holidays:`);
//         this.holidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} - ${holiday.date.toDateString()}`));
//     },
//
//     // Function to find upcoming holidays
//     findUpcomingHolidays: function() {
//         const currentDate = new Date();
//         const upcomingWeek = new Date(currentDate);
//         upcomingWeek.setDate(currentDate.getDate() + 7);
//         const upcomingHolidays = this.holidays.filter(holiday => holiday.date <= upcomingWeek);
//         console.log("Upcoming Holidays for the Next Week:");
//         upcomingHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
//     },
//
//     // Function to find previous holidays
//     findPreviousHolidays: function() {
//         const currentDate = new Date();
//         const previousHolidays = this.holidays.filter(holiday => holiday.date < currentDate);
//         console.log("Previous Holidays:");
//         previousHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
//     },
//
//     // Function to find previous holidays
//     findNextHolidays: function() {
//         const currentDate = new Date();
//         const previousHolidays = this.holidays.filter(holiday => holiday.date >= currentDate);
//         console.log("Next Holidays:");
//         previousHolidays.forEach(holiday => console.log(`${holiday.title} - ${holiday.description} (${holiday.date.toDateString()})`));
//     }
// };
//
// // Add holidays
// HolidayPlanner.addHoliday(new Holiday("Christmas", "Festive celebration", "2024-12-25"));
// HolidayPlanner.addHoliday(new Holiday("New Year", "Welcoming the new year", "2025-01-01"));
// HolidayPlanner.addHoliday(new Holiday("Independence Day", "National holiday", "2025-07-04"));
//
// // Remove a holiday
// HolidayPlanner.removeHoliday("New Year");
//
// // Find holidays by date
// HolidayPlanner.findHolidays();
//
// // Find upcoming holidays
// HolidayPlanner.findUpcomingHolidays();
//
// // Find previous holidays
// HolidayPlanner.findPreviousHolidays();
// HolidayPlanner.findNextHolidays();


// /*
//  monthIndex => December has index 11, so 12 means January of the next year
//  date => January has 31 days, so 35 means 31 + 4 = 4 February
//  expected: 04.02.2016
// */
// const date = new Date(2015, 12, 35);
// console.log(date);
// // Thu Feb 04 2016 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
//
// const now = new Date().getTime();
// const rightNow = Date.now();
// console.log(now - rightNow);
// // 0






// const month= new Date(1999, 0);
// console.log(month);
// // Fri Jan 01 1999 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
//
// const day= new Date(1999, 0, 15);
// console.log(day);
// // Fri Jan 15 1999 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
//
// const hours= new Date(1999, 0, 15, 12);
// console.log(hours);
// // Fri Jan 15 1999 12:00:00 GMT+0100 (Ora standard dell’Europa centrale)
//
// const minutes= new Date(1999, 0, 15, 12, 30);
// console.log(minutes);
// // Fri Jan 15 1999 12:30:00 GMT+0100 (Ora standard dell’Europa centrale)
//
// const seconds= new Date(1999, 0, 15, 12, 30, 15);
// console.log(seconds);
// // Fri Jan 15 1999 12:30:15 GMT+0100 (Ora standard dell’Europa centrale)
//
// const milliseconds = new Date(1999, 0, 15, 12, 30, 15, 20000);
// console.log(milliseconds);
// // Fri Jan 15 1999 12:30:35 GMT+0100 (Ora standard dell’Europa centrale)



// const date = new Date();
// console.log(date);
// // Tue May 07 2024 12:58:40 GMT+0200 (Ora legale dell’Europa centrale)
// const dateZero = new Date(0);
// console.log(dateZero);
// // Thu Jan 01 1970 01:00:00 GMT+0100 (Ora standard dell’Europa centrale)
// const dateOneDay = new Date(1000 * 60 * 60 * 24);
// console.log(dateOneDay);
// // Fri Jan 02 1970 01:00:00 GMT+0100 (Ora standard dell’Europa centrale)
// const dateString = new Date('11-1-20');
// console.log(dateString);
// // Tue Nov 01 2020 00:00:00 GMT+0100 (Ora standard dell’Europa centrale)
// const dateObject = new Date(new Date("2024-12-17T03:24:00"));
// console.log(dateObject);
// // Tue Dec 17 2024 03:24:00 GMT+0100 (Ora standard dell’Europa centrale)






// function Todo(name, type, complexity, duration = 120) {
//     this.name = name;
//     this.type = type;
//     this.complexity = complexity;
//     this.duration = duration;
// }
//
// const todoList = [];
//
// function addTodo(todoItem) {
//     todoList.push(todoItem);
// }
//
// function deleteTodoByName(todoName) {
//     const index = todoList.findIndex(todo => todoName === todo.name);
//     if (index !== -1) {
//         todoList.splice(index, 1);
//         console.log(`Todo item "${todoName}" deleted.`);
//     } else {
//         console.log(`Todo item "${todoName}" not found.`);
//     }
// }
//
// function displayTodos() {
//     console.warn("Todo List:");
//     todoList.forEach((item, index) => {
//         console.log(`${index + 1}. ${item.name} - ${item.type} - ${item.complexity}`);
//     });
// }
//
// function displayTodosByType(type) {
//     console.warn(`Todo with type ${type}:`);
//     todoList.filter(todo => todo.type === type)
//         .forEach(todo => console.log(`${todo.name} - ${todo.complexity}`));
// }
//
// function displayTodosByComplexity(complexity) {
//     console.warn(`Todo with complexity ${complexity}:`);
//     todoList.filter(todo => todo.complexity === complexity)
//         .forEach(todo => console.log(`${todo.name} - ${todo.type}`));
// }
//
// function sortByComplexity() {
//     console.warn(`Todo sorted by complexity`);
//     todoList.sort((first, second) => first.complexity - second.complexity)
//         .forEach(todo => console.log(`${todo.complexity} - ${todo.name} - ${todo.type}`));
// }
//
// function checkWarnings() {
//     let result = todoList.length >= 10 || todoList.some(e => e.complexity >= 10) ? 'yes' : 'no';
//     console.warn(`Are there problematic tasks? ${result}`);
// }
//
// function sumDuration() {
//     console.warn(`Total time needed (h): ${todoList.map(e => e.duration / 60).reduce((a, b) => a + b, 0)}`);
// }
//
// addTodo(new Todo("Buy groceries", 'Shopping', 1, 60));
// addTodo(new Todo("Call mom", 'Personal', 2));
// addTodo(new Todo("Do laundry", 'Home', 5));
// addTodo(new Todo("Buy meat", 'Shopping', 2));
//
// checkWarnings();
//
// displayTodos();
// displayTodosByType('Shopping');
// displayTodosByType('Home');
// displayTodosByType('Personal');
// displayTodosByComplexity(1);
// displayTodosByComplexity(2);
// displayTodosByComplexity(3);
// sortByComplexity()
// sumDuration();
//
// deleteTodoByName("Do laundry");
// displayTodos();


// const todoList = [];
//
// function addTodo(todoItem) {
//     todoList.push(todoItem);
// }
//
// function deleteTodo(todoItem) {
//     const index = todoList.indexOf(todoItem);
//     if (index !== -1) {
//         todoList.splice(index, 1);
//         console.log(`Todo item "${todoItem}" deleted.`);
//     } else {
//         console.log(`Todo item "${todoItem}" not found.`);
//     }
// }
//
// function displayTodos() {
//     console.log("Todo List:");
//     todoList.forEach((item, index) => {
//         console.log(`${index + 1}. ${item}`);
//     });
// }
//
// addTodo("Buy groceries");
// addTodo("Do laundry");
// addTodo("Call mom");
//
// displayTodos();
//
// deleteTodo("Do laundry");
//
// displayTodos();


// function calculateGrade() {
//     const grades = [];
//     const numberOfGrade = parseInt(prompt('How much exams have you done?'));
//     const arr = new Array(numberOfGrade).fill(null);
//     if(numberOfGrade > 0) {
//         for (let index in arr) {
//             const grade = parseInt(prompt(`Insert evaluation of exam number ${+index + 1}: `));
//             if (grade > 0) {
//                 grades.push(grade);
//             } else {
//                 break;
//             }
//         }
//     }
//
//     const average = grades.reduce((a, b) => a + b, 0) / numberOfGrade;
//     alert(`Your average grade is: ${average}`);
// }
//
// calculateGrade();


// const iterable = [10, 20, 30];
// for (const value of iterable) {
//     console.log(value);
// }
// // 10
// // 20
// // 30
//
// const anotherIterable = ['aba', 'bcb', 'cdc'];
// anotherIterable.forEach((element, index, array) => {
//     console.log(`The array '${array}' has at index ${index} the element: ${element}`)
// })
// // The array 'aba,bcb,cdc' has at index 0 the element: aba
// // The array 'aba,bcb,cdc' has at index 1 the element: bcb
// // The array 'aba,bcb,cdc' has at index 2 the element: cdc




// const arr = [1, 2, 100];
// console.log(arr.length);
// // 3
//
// arr[2] = 999;
// console.log(arr);
// // [1, 2, 999]
// console.log(arr.length);
// // 3
//
// arr[3] = 0;
// console.log(arr.length);
// // 4
//
// // "arr" became a "sparse array"
// arr[5] = 123;
// console.log(arr.length);
// // 6
// console.log(arr);
// // [1, 2, 999, 0, empty, 123]
//




// const arrayOne = [];
// console.log(arrayOne.length);
// // 0
//
// const arrayTwo = ['a', 'b', 'c'];
// console.log(arrayTwo.length);
// // 3
//
// const anotherOne = new Array(10);
// console.log(anotherOne.length, anotherOne[0]);
// // 10 undefined
//
// const more = Array(1, 2);
// console.log(more.length);
// // 2
//
// const complexTypeArray = [
//     {var1: 1, var2: 'two'},
//     {var1: 10, var2: 'twenty'}
// ];
// console.log(complexTypeArray.length);
// // 2
// console.log(complexTypeArray[0]);
// // var1: 1, var2: 'two'
// console.log(complexTypeArray[1].var1);
// // 10
// console.log(complexTypeArray[1].var2);
// // twenty









// // Object template for Contact
// function Contact(name, email, phone) {
//     this.name = name;
//     this.email = email;
//     this.phone = phone;
// }
//
// // Method to display details of the contact
// Contact.prototype.displayDetails = function() {
//     return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
// }
//
// // Object for ContactManager
// const ContactManager = {
//     contacts: {},
//
//     get contactList() {
//         let str = '';
//         for (const contactsKey in this.contacts) {
//             str += `${this.contacts[contactsKey].displayDetails()}\n`;
//         }
//         return str;
//     },
//
//     get contactListAdvanced() {
//         return Object.keys(this.contacts).map(e => this.contacts[e].displayDetails()).join('\n')
//     },
//
//     // Method to add a new contact to the collection
//     addContact: function(contact) {
//         this.contacts[contact.name] = contact;
//         console.log(`Contact "${contact.name}" has been added.`);
//     },
//
//     // Method to find a contact by name
//     findContactByName: function(name) {
//         const foundContact = this.contacts[name];
//         if (foundContact) {
//             return foundContact;
//         } else {
//             return `Contact with name "${name}" not found.`;
//         }
//     },
//
//     // Method to delete a contact by name
//     deleteContact: function(name) {
//         if (this.contacts[name]) {
//             delete this.contacts[name];
//             console.log(`Contact "${name}" has been deleted.`);
//         } else {
//             console.log(`Contact with name "${name}" not found.`);
//         }
//     }
// }
//
// // Create instances of Contact representing different contacts
// const contact1 = new Contact("Alice", "alice@example.com", "123-456-7890");
// const contact2 = new Contact("Bob", "bob@example.com", "987-654-3210");
// const contact3 = new Contact("Charlie", "charlie@example.com", "456-789-0123");
//
// // Add contacts to the contact manager
// ContactManager.addContact(contact1);
// ContactManager.addContact(contact2);
// ContactManager.addContact(contact3);
//
// // Find a contact by name
// const foundContact = ContactManager.findContactByName("Bob");
// if (foundContact) {
//     console.log("Found contact: ", foundContact.displayDetails());
// }
//
// // Display all contacts in the contact manager
// console.log("All Contacts:")
// console.log(ContactManager.contactListAdvanced);
//
// // Delete a contact by name
// ContactManager.deleteContact("Charlie");
//
// // Display all contacts in the contact manager
// console.log("All Contacts:");
// console.log(ContactManager.contactList);



// let user = {
//     name: "John",
//     surname: "Ford",
//
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//
//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };
//
// console.log(user.fullName);
// // John Ford
//
// user.fullName = "Jane Smith";
// console.log(user.name);
// // Jane
// console.log(user.surname);
// // Smith








// function sayHello() {
//     console.log(`Hello, my name is ${this.name}`)
// }
//
// const user = {
//     name: 'John',
//     introduce: sayHello
// }
//
// const admin = {
//     name: 'Mike',
//     introduce: sayHello
// }
//
// user.introduce();
// // Hello, my name is John
// admin.introduce();
// // Hello, my name is Mike




// let user = { name: "John" };
// let admin = user;
// console.log(user === admin);
// // true
//
// admin = {...user};
// console.log(user === admin);
// // false
//
// admin.isSuper = false;
// const superAdmin = Object.assign(admin, {isSuper: true})
// console.log(superAdmin.name);
// console.log(superAdmin.isSuper);
// // John
// // true



// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }
// const car = new Car("Honda", "Accord", 1998);
// car.fuel = 'Diesel';
// Object.defineProperty(car, 'owner', { value: 'Davide', enumerable: false });
//
// for (const carKey in car) {
//     console.log(carKey);
// }
// // brand
// // model
// // year
// // fuel
//
// console.log(Object.keys(car));
// // ['brand', 'model', 'year', 'fuel']
//
// console.log(Object.getOwnPropertyNames(car));
// // ['brand', 'model', 'year', 'fuel', 'owner']





// const person = {
//     name: {
//         firstName: 'Davide',
//         lastName: 'Mininni',
//     },
//     age: 34,
//     "hair's color": 'black',
// }
//
// console.log(person.age);
// // 34
// console.log(person.name.firstName);
// // Davide
// console.log(person["hair's color"]);
// // black
//
// person.sex = 'm';
// person["eye's color"] = 'brown';




// function Car(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }
// const car = new Car("Honda", "Accord", 1998);
//
// const person = {
//     firstName: 'Davide',
//     lastName: 'Mininni',
// }
// car.owner = person;
//
// console.log(car.owner.firstName);
// // Davide




// const obj1 = { prop1: '1', prop2: '2' };
//
// const shorthand = '3';
// const shorthand2 = { a: 'aaa', b: 'bbb'};
// const obj2 = { shorthand, shorthand2 };
//
// const obj3 = {
//     'another prop': 1000,
//     [shorthand2.a]: "key is aaa",
//     ...obj1,
//     ...obj2
// };
//
// console.log(obj3);
// // aaa: "it's 1"
// // another prop: 1000
// // prop1: "1"
// // prop2: "2"
// // shorthand: "3"
// // shorthand2:
// //     a: "aaa"
// //     b: "bbb"




// // OBJECT INITIALIZER
// const firstCar = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998,
// };
//
// // CONSTRUCTOR FUNCTION
// function CarConstructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }
// const secondCar = new CarConstructor("Honda", "Accord", 1998);
//
// // USING Object.create()
// const CarProto = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998,
// };
// const thirdCar = Object.create(CarProto);
//
//
//
// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);


// function sumFunc(a, b) {
//     return a + b;
// }
//
// let sumArrow = (a, b) => a + b;
//
// console.log(sumFunc(1, 2));
// // 3
// console.log(sumArrow(1, 2));
// // 3
//
// export { sumFunc, sumArrow };


// let age = prompt("What is your age?", 18);
// let welcome;
// if (age < 18) {
//     welcome = function() {
//         alert("Hello!");
//     };
// } else {
//     welcome = function() {
//         alert("Greetings!");
//     };
// }
//
// welcome();
//




// function myFunctionDecl() {
//     console.log('Declaration!')
// }
//
// const myFunctionExpr = function () {
//     console.log('Expression!')
// }
//
// myFunctionDecl();
// // Declaration
// myFunctionExpr();
// // Expression
//
// let anotherFunction = myFunctionExpr;
//
// anotherFunction();
// // Expression
//
//
//

// function getAge() {
//     return Number(prompt("What's your age?"));
// }
//
// function logAllowedAccess(message, age) {
//     console.log(`${message}, age: ${age}`)
// }
//
// function logNotAllowedAccess(message, age) {
//     console.error(`${message}, age: ${age}`)
// }
//
// function allowAccess(age) {
//     return age > 18;
// }
//
// function navigateToSite() {
//     const age = getAge();
//
//     if (allowAccess(age)) {
//         logAllowedAccess('OK', age);
//     } else {
//         logNotAllowedAccess('KO', age);
//     }
// }
//
// navigateToSite();


// function logger(message) {
//     console.log(`Message: ${message}`, Date.now());
// }
//
// logger();
// // undefined 1714913184393
//
// function messageLogger(message = 'Unknown error.') {
//     console.log(`Message: ${message}`, Date.now());
// }
//
// messageLogger();
// // Unknown error. 1714913184393
//
// messageLogger('Hello world!');
// // Hello world! 1714913184393


// const name = 'Davide';
//
// function showName() {
//     const name = 'Edivad';
//     const surname = 'Mininni';
//     console.log(name);
// }
//
// showName();
// // Edivad
// console.log(name);
// // Davide
// console.log(surname);
// // Uncaught ReferenceError: surname is not defined





// const car = {
//     brand: "Honda",
//     model: "Accord",
//     year: 1998,
// };
//
// console.log(car.brand);
// // Honda
//
// function updateBrand(obj) {
//     // Mutating the object is visible outside the function
//     obj.brand = "Toyota";
//     // Try to reassign the parameter, but this won't affect
//     // the variable's value outside the function
//     obj = null;
// }
// updateBrand(car);
// console.log(car.brand);
// // Toyota




// let a = 1;
// console.log(a);
// // 1
//
// function sumTen(value) {
//     value += 10;
// }
// sumTen(a);
// console.log(a);
// // 1
//
// function returnSumTen(value) {
//     return value + 10;
// }
// a = returnSumTen(a);
// console.log(a);
// // 11



// function sum(firstOperand, secondOperand) {
//     return firstOperand + secondOperand;
// }
//
// console.log(sum(1, 2));
// // 3
//
// function messageLogger(message) {
//     if (message){
//         console.log(`Message: ${message}`, Date.now());
//     }
// }
//
// messageLogger('Hello!');
// // Message: Hello! 1714913184393



// console.log(
//     "" + 1 + 0,
//     "" - 1 + 0,
//     true + false,
//     6 / "3",
//     "2" * "3",
//     4 + 5 + "px",
//     "$" + 4 + 5,
//     "4" - 2,
//     "4px" - 2,
//     "  -9  " + 5,
//     "  -9  " - 5,
//     null + 1,
//     undefined + 1,
//     " \t \n" - 2,
// );
// // what do you expect?



// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
//
// console.log(a, b, c, d);
// // what do you expect?
//
//
// let x = 2;
// let y = 1 + (x *= 2);
//
// console.log(x, y);
// // what do you expect?



// const items = Array.from(
//     { length: 100 },
//     (_, i) => i + 1
// );
// const tests = [
//     { pass: (item) => item % 2 === 0 },
//     { pass: (item) => item % 3 === 0 },
//     { pass: (item) => item % 5 === 0 },
// ];
// let itemsPassed = 0;
//
// itemIteration: for (const item of items) {
//     for (const test of tests) {
//         if (!test.pass(item)) {
//             continue itemIteration;
//         }
//     }
//     itemsPassed++;
// }
//
// console.log(itemsPassed)
// // 3


// let i = 0;
// while (i < 6) {
//     if (i === 3) {
//         break;
//     }
//     i += 1;
// }
//
// console.log(i);
// // 3
//
// let text = '';
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     text += i;
// }
//
// console.log(text);
// // "13579"







// /*
// for (init; condition; step) {
//     loop body
// }
//
// evaluate init =>
//     => evaluate condition => if true, execute loop body, then execute step =>
//         => evaluate condition => if true, execute loop body, then execute step =>
//             ...
//                 => evaluate condition => if false, exit loop
// */
//
// let result = 0;
// for(let i= 1; i < 4; i++) {
//     result += i**i;
// }
// console.log(result);
// // 1^1 + 2^2 + 3^3 = 1 + 4 + 27 = 32



// let result = '';
// let index = 0;
//
// do {
//     index = index + 1;
//     result += index;
// } while (index < 5);
//
// console.log(result);
// // "12345"



// let index = 0;
// let sum = 0;
//
// while (index < 10) {
//     index++;
//     sum += index;
// }
//
// console.log(sum);
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
//
//
// let anotherIndex = 0;
// let anotherSum = 0;
//
// while (anotherIndex < 10) {
//     anotherSum += anotherIndex;
// }
// // anotherIndex is never changed, so the loop never exits


// let four = Number(prompt('2 + 2 = ?', 4));
//
// switch (four) {
//     case 0:
//     case 1:
//     case 2:
//         console.log('Lower!');
//     case 3: {
//         console.log('Lower!');
//         break;
//     }
//     case 4:
//         console.log('Exact!');
//         break;
//     default:
//         console.log('Higher!');
// }




// const truthyValue = true;
// const falsyValue = false;
//
// if (truthyValue) {
//     console.log('Good morning!')
// }
// // Good morning!
//
// if (falsyValue) {
//     console.log('Good morning!')
// } else {
//     console.log('Good night!')
// }
// // Good night!
// falsyValue ? console.log('Good morning!') : console.log('Good night!');
// // Good night!
//
// if (truthyValue && falsyValue) {
//     console.log('Good morning!')
// } else if (truthyValue) {
//     console.log('Good afternoon!')
// } else {
//     console.log('Good night!')
// }
// // Good afternoon















// console.log(Boolean(1));
// // true
// console.log(Boolean('0'));
// // true
// console.log(Boolean("Hello world!"));
// // true
// console.log(Boolean(" "));
// // true
//
// console.log(Boolean(0));
// // false
// console.log(Boolean(""));
// // false
// console.log(Boolean(null));
// // false
// console.log(Boolean(undefined));
// // false
// console.log(Boolean(NaN));
// // false

// const string1 = '1';
// console.log(typeof string1);
// // string
// console.log(typeof Number(string1), Number(string1));
// // number 1
//
// console.log(Number(undefined));
// // NaN
// console.log(Number(null));
// // 0
// console.log(Number(true));
// // 1
// console.log(Number(false));
// // 0
// console.log(Number(''));
// // 0
// console.log(Number('    111  '));
// // 111
// console.log(Number('abcd'));
// // NaN


// const number1 = 1000;
// console.log(typeof number1);
// // number
// console.log(typeof String(number1), String(number1));
// // string "1000"
//
// const booleanToString = false;
// console.log(typeof boolean1);
// // boolean
// console.log(typeof String(booleanToString), String(booleanToString));
// // string "false"


// const apex = 'ONE';
// const double = "two";
// const backtick = `This is a string with \`backticks\``;
//
// const evalFunct = `The sum of 2 and 2 is ${2 + 2}.`;
// console.log(evalFunct);
// // The sum of 2 and 2 is 4.
//
// const lines = `I can
// split text
// in different lines
// without error`;
// const single = "I can\nsplit text\nin different lines\nwithout error";
// console.assert(single === lines);
// // true
//
// const string1 = 'String can be concatenated ';
// const string2 = 'using the';
// console.log(string1 + string2 + ' + operator.');
// // String can be concatenated using the + operator.



// const trueValue = true;
// const falseValue = false;
//
// const trueOr = falseValue || trueValue;
// console.log(trueOr);
// // true
//
// const falseAnd = falseValue && trueValue;
// console.log(falseAnd);
// // false
//
// if (trueValue) {
//     console.log('if branch')
// } else {
//     console.log('else branch')
// }
// // if branch


// const n1 = 1;
// const n2 = 12345.6789;
// const n3 = 1_000_000_000;
//
// const big1 = 1n;
// const big2 = 1_000_000_000n;
// const big3 = BigInt(10000000000000);
// const big4 = BigInt('10000000000000');
//
// console.assert(0n === 0);
// // false
// console.assert(0n == 0);
// // true

// let minutesInADay = 1440;
//
// const MINUTES_IN_HOUR = 60;
// const HOURS_IN_DAY = 24;
//
// function _convertMinutesInHours(minutes) {
//     return minutes / MINUTES_IN_HOUR;
// }
//
// function convertHoursInDays(hours) {
//     return hours / HOURS_IN_DAY;
// }
//
// function convertMinutesInDays(minutes) {
//     return convertHoursInDays(_convertMinutesInHours(minutes));
// }
//
// console.assert(convertMinutesInDays(minutesInADay) === 1);


// const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] % 2 === 0) {
//         result += numList[i] * 10;
//     }
// }
//
// const resultFunc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     .filter(n => n % 2 === 0)
//     .map(a => a * 10)
//     .reduce((a, b) => a + b, 0);


// class Person {
//     constructor(firstName, lastName, age) {
//         this.name = {
//             firstName: firstName,
//             lastName: lastName
//         };
//         this.age = age;
//     }
//     introduceSelf() {
//         alert(`Hi! I'm ${this.name.firstName}.`);
//     }
// }
//
// const person = new Person('Davide', 'Mininni', 34);
// person.introduceSelf();
// // Hi! I'm Davide.


// function Person(firstName, lastName, age) {
//     this.name = {
//         firstName: firstName,
//         lastName: lastName
//     };
//     this.age = age;
// }
//
// Person.prototype.introduceSelf = function () {
//     alert(`Hi! I'm ${this.name.firstName}.`);
// }
//
// const person = new Person('Davide', 'Mininni', 34);
// person.introduceSelf();
// // Hi! I'm Davide.



// const personPrototype = {
//     introduceSelf: function () {
//         alert(`Hi! I'm ${this.name.firstName}.`);
//     }
// };
//
// const person = {
//     name: {
//         firstName: 'Davide',
//         lastName: 'Mininni',
//     },
//     age: 34,
//     __proto__: personPrototype,
// }
//
// person.introduceSelf();
// // Hi! I'm Davide.

// // sequence
// alert('Hello');
// alert('world!');
//
// // selection
// if (true)
//     alert('Hello world!');
//
// // iteration
// do
//     alert('Hello world!')
// while (true);
//
// // subroutine and block
// const myAlert = () => {
//     alert('Hello world!');
// }
// myAlert();
