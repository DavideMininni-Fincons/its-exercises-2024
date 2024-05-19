function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Prompt user for input
let userInput = parseInt(prompt("Enter the value of n to calculate the n-th Fibonacci number:"));

// Check if the input is a valid number
if (!isNaN(userInput) && userInput >= 0) {
    // Calculate and display the Fibonacci number
    alert(`The ${userInput}-th Fibonacci number is: ${fibonacci(userInput)}`);
} else {
    userInput = parseInt(prompt("Please enter a valid non-negative integer."));
}
