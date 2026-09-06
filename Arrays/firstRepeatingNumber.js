function firstRepeatingNumber() {
    const numbers = [10, 20, 30, 20, 10];

    let seen = new Set();

    for (let number of numbers) {
        if (seen.has(number)) {
            console.log("First repeating number: " + number);
            break;
        } else {
            seen.add(number);
        }
    }
}

firstRepeatingNumber();