let attempts = 1, min = 1, max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let guess = parseInt(prompt(`I'm thinking of a number between ${min} and ${max}. Can you guess what it is?`));

// Check if the guess is correct
while (guess !== randomNumber) {
    attempts++;

    // Provide hints to the player
    if (guess > randomNumber) {
        guess = parseInt(prompt("Too high! Try guessing lower."));
    } else {
        guess = parseInt(prompt("Too low! Try guessing higher."));
    }
}

// Congratulate the player on guessing the correct number
alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`);
