function countWordFrequency(text) {
    const wordFrequencyMap = new Map();
    const words = text.split(/\s+/); // Split text into an array of words

    // Iterate through the array of words and update the frequency in the map
    words.forEach(word => {
        const lowerCaseWord = word.toLowerCase();
        if (wordFrequencyMap.has(lowerCaseWord)) {
            wordFrequencyMap.set(lowerCaseWord, wordFrequencyMap.get(lowerCaseWord) + 1);
        } else {
            wordFrequencyMap.set(lowerCaseWord, 1);
        }
    });

    return wordFrequencyMap;
}

// Test the countWordFrequency function
const text = prompt("Insert text:", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor id nisl viverra ultricies.");
const wordFrequencyMap = countWordFrequency(text);

console.log("Word Frequency Map:");
wordFrequencyMap.forEach((frequency, word) => {
    console.log(`${word}: ${frequency}`);
});
