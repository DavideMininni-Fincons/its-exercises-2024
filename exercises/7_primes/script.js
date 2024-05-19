let max = parseInt(prompt("Enter the max value to calculate prime numbers:"));
if (max < 0) {
    max = -max;
}
let primeFound = '';

nextPrime:
    for (let i = 1; i <= max; i++) { // loop until max is reached
        for (let j = 2; j < i; j++) { // look for divisors
            if (i % j === 0) {
                continue nextPrime;
            }
        }
        primeFound += `${i} `;
    }

alert(`Found: ${primeFound}`);
