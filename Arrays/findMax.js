function findMax() {
    const numbers = [10, 45, 23, 89, 12, 67];

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    console.log("Maximum number: " + max);
}

findMax();