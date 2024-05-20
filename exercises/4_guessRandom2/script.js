let attempts = 1, min = 1, max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
alert(randomNumber);

let guess = parseInt(prompt("I'm thinking of a number between 1 and 100. Can you guess what it is?"));

// Check if the guess is correct
do {
    // Provide hints to the player
    if (guess > randomNumber) {
        guess = parseInt(prompt("Too high! Try guessing lower."));
    } else if (guess < randomNumber) {
        guess = parseInt(prompt("Too low! Try guessing higher."));
    } else {
        break;
    }
    attempts++;
} while (guess !== randomNumber);

// Congratulate the player on guessing the correct number
alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`);
