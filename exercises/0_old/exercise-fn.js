// // Generate a random number between 1 and 100
// function generateRandomNumber(min = 1, max = 100) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// // Function to start the game
// function startGame() {
//     let attempts = 0, min = 1, max = 100;
//     const randomNumber = generateRandomNumber(min, max);
//     let guess = parseInt(prompt(`I'm thinking of a number between ${min} and ${max}. Can you guess what it is?`));
//
//     if (isNaN(guess)){
//         return;
//     }
//
//     // Check if the guess is correct
//     while (guess !== randomNumber) {
//         attempts++;
//
//         // Provide hints to the player
//         if (guess > randomNumber) {
//             guess = parseInt(prompt("Too high! Try guessing lower."));
//         } else {
//             guess = parseInt(prompt("Too low! Try guessing higher."));
//         }
//     }
//
//     // Congratulate the player on guessing the correct number
//     alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`);
// }
//
// // Start the game
// startGame();

// // Generate a random number between 1 and 100
// function generateRandomNumber(min = 1, max = 100) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// // Function to start the game
// function startGame() {
//     let guess, attempts = 0, min = 1, max = 100;
//     const randomNumber = generateRandomNumber(min, max);
//
//     do {
//         guess = parseInt(prompt("I'm thinking of a number between 1 and 100. Can you guess what it is?"));
//         if (isNaN(guess)){
//             return;
//         }
//
//         attempts++;
//
//         // Provide hints to the player
//         if (guess > randomNumber) {
//             alert("Too high! Try guessing lower.");
//         } else if (guess < randomNumber) {
//             alert("Too low! Try guessing higher.");
//         }
//     } while (guess !== randomNumber);
//
//     // Congratulate the player on guessing the correct number
//     alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`);
// }
//
// // Start the game
// startGame();



// // 1.14
// // Function to prompt user for max value
// function promptMaxValue() {
//     return parseInt(prompt("Enter the max value to calculate prime numbers:"));
// }
//
// // Function to validate input
// function validateInput(max) {
//     return max < 0 ? -max : max;
// }
//
// // Function to find prime numbers
// function findPrimeNumbers(max) {
//     let primeFound = '';
//
//     nextPrime:
//         for (let i = 2; i <= max; i++) { // loop until max is reached
//             for (let j = 2; j < i; j++) { // look for divisors
//                 if (i % j === 0) {
//                     continue nextPrime;
//                 }
//             }
//             primeFound += `${i} `;
//         }
//
//     return primeFound;
// }
//
// // Function to start the prime number calculation
// function startPrimeNumberCalculation() {
//     const max = promptMaxValue();
//     const validatedMax = validateInput(max);
//     const primes = findPrimeNumbers(validatedMax);
//     alert(`Found: ${primes}`);
// }
//
// // Start the prime number calculation
// startPrimeNumberCalculation();


// // Function to check if a number is prime
// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//
//     // Loop to check for divisors
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false; // Not a prime number
//         }
//     }
//
//     return true; // Prime number
// }
//
// // Function to start the prime number checker
// function primeNumberChecker() {
//     const number = parseInt(prompt("Enter a number to check if it's prime:"));
//
//     if (isPrime(number)) {
//         alert(`${number} is a prime number!`);
//     } else {
//         alert(`${number} is not a prime number.`);
//     }
// }
//
// // Start the prime number checker
// primeNumberChecker();
//
// // Function to find prime factors of a number
// function primeFactors(number) {
//     let factors = [];
//
//     // Divide by 2 as long as number is divisible
//     while (number % 2 === 0) {
//         factors.push(2);
//         number /= 2;
//     }
//
//     // Loop to find prime factors starting from 3
//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         while (number % i === 0) {
//             factors.push(i);
//             number /= i;
//         }
//     }
//
//     // If number is still greater than 2, it's a prime factor
//     if (number > 2) {
//         factors.push(number);
//     }
//
//     return factors;
// }
//
// // Function to start the prime factorization
// function primeFactorization() {
//     const number = parseInt(prompt("Enter a number to find its prime factors:"));
//
//     if (number <= 1) {
//         alert("Prime factorization is not possible for numbers less than or equal to 1.");
//     } else {
//         const factors = primeFactors(number);
//         alert(`Prime factors of ${number}: ${factors.join(", ")}`);
//     }
// }
//
// // Start the prime factorization
// primeFactorization();
//
//
// // Function to generate multiplication table
// function generateMultiplicationTable(number) {
//     // Validate the input
//     if (isNaN(number) || number < 1) {
//         return "Invalid input. Please enter a valid number greater than or equal to 1.";
//     }
//
//     let table = "";
//     for (let i = 1; i <= 10; i++) {
//         const result = number * i;
//         table += `${number} × ${i} = ${result}\n`;
//     }
//
//     return table;
// }
//
// // Function to start the multiplication table generator
// function startMultiplicationTable() {
//     const input = prompt("Enter a number to generate its multiplication table:");
//     const number = parseInt(input);
//
//     const multiplicationTable = generateMultiplicationTable(number);
//     alert(multiplicationTable);
// }
//
// // Start the multiplication table generator
// startMultiplicationTable();
//
// // Function to generate Fibonacci sequence
// function generateFibonacciSequence(terms) {
//     // Validate the input
//     if (isNaN(terms) || terms < 1) {
//         return "Invalid input. Please enter a valid number of terms greater than or equal to 1.";
//     }
//
//     let sequence = "Fibonacci Sequence:";
//     let first = 0, second = 1, next;
//
//     for (let i = 1; i <= terms; i++) {
//         if (i <= 1) {
//             next = i;
//         } else {
//             next = first + second;
//             first = second;
//             second = next;
//         }
//         sequence += ` ${next}`;
//     }
//
//     return sequence;
// }
//
// // Function to start the Fibonacci sequence generator
// function startFibonacciSequence() {
//     const input = prompt("Enter the number of terms for the Fibonacci sequence:");
//     const terms = parseInt(input);
//
//     const fibonacciSequence = generateFibonacciSequence(terms);
//     alert(fibonacciSequence);
// }
//
// // Start the Fibonacci sequence generator
// startFibonacciSequence();
//
//
// // Function to calculate factorial
// function calculateFactorial(number) {
//     // Validate the input
//     if (isNaN(number) || number < 0) {
//         return "Invalid input. Please enter a non-negative integer.";
//     }
//
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//
//     return factorial;
// }
//
// // Function to start the factorial calculation
// function startFactorialCalculation() {
//     const input = prompt("Enter a number to calculate its factorial:");
//     const number = parseInt(input);
//
//     const factorial = calculateFactorial(number);
//     alert(`Factorial of ${number}: ${factorial}`);
// }
//
// // Start the factorial calculation
// startFactorialCalculation();
//
