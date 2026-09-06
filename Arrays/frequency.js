function findFrequency() {
    const numbers = [10, 20, 30, 20, 10, 20];

    let frequency = new Map();

    for (let number of numbers) {
        if (frequency.has(number)) {
            frequency.set(number, frequency.get(number) + 1);
        } else {
            frequency.set(number, 1);
        }
    }

    console.log(frequency);
}

findFrequency();