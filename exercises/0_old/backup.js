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
