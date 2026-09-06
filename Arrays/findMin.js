function findMin() {
    const numbers = [10, 45, 23, 89, 12, 67];

    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    console.log("Minimum number: " + min);
}

findMin();