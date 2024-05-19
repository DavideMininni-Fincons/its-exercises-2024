// Function to generate Fibonacci sequence
function startFibonacciSequence() {
    const input = prompt("Enter the number of terms for the Fibonacci sequence:");
    const terms = parseInt(input);

    // Validate the input
    if (isNaN(terms) || terms < 1) {
        return "Invalid input. Please enter a valid number of terms greater than or equal to 1.";
    }

    let sequence = "Fibonacci Sequence:";
    let first = 0, second = 1, next;

    for (let i = 1; i <= terms; i++) {
        if (i <= 1) {
            next = i;
        } else {
            next = first + second;
            first = second;
            second = next;
        }
        sequence += ` ${next}`;
    }

    alert(sequence);
}

// Start the Fibonacci sequence generator
startFibonacciSequence();
