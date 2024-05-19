// Prompt user for input
let userInput = parseInt(prompt("Enter a number to calculate its factorial:"));

// Check if the input is a valid number
if (!isNaN(userInput) && userInput <= 0) {
    userInput = -1 *userInput;
}

// factorial calculation
let factorial = 1;
for (let i = 1; i <= userInput; i++) {
    factorial *= i;
}

// Calculate and display the factorial
alert(`The factorial of ${userInput} is: ${factorial}`);
