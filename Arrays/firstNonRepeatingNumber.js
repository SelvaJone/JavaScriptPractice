function firstNonRepeatingNumber() {
    const numbers = [10, 20, 30, 20, 10];

    let frequency = new Map();

    // Step 1: Count each number
    for (let number of numbers) {
        if (frequency.has(number)) {
            frequency.set(number, frequency.get(number) + 1);
        } else {
            frequency.set(number, 1);
        }
    }

    // Step 2: Find the first number with count 1
    for (let number of numbers) {
        if (frequency.get(number) === 1) {
            console.log("First non-repeating number: " + number);
            break;
        }
    }
}

firstNonRepeatingNumber();