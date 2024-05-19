// recursive factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Prompt user for input
const userInput = parseInt(prompt("Enter a number to calculate its factorial:"));

// Check if the input is a valid number
if (!isNaN(userInput) && userInput >= 0) {
    // Calculate and display the factorial
    alert(`The factorial of ${userInput} is: ${factorial(userInput)}`);
} else {
    alert("Please enter a valid non-negative integer.");
}
