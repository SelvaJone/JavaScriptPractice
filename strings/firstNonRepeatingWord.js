function firstNonRepeatingWord(str) {

    let words = str.toLowerCase().trim().split(/\s+/);

    let frequency = new Map();

    for (let word of words) {
        if (frequency.has(word)) {
            frequency.set(word, frequency.get(word) + 1);
        } else {
            frequency.set(word, 1);
        }
    }

    for (let [key, value] of frequency) {
        if (value === 1) {
            console.log("The first non repeating word: " + key);
            break;
        }
    }
}

firstNonRepeatingWord("java is easy and java is powerful");