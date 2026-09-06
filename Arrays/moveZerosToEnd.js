function moveZerosToEnd() {
    let numbers = [0, 1, 0, 3, 12];

    let position = 0;

    // Move non-zero values to the front
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== 0) {
            numbers[position] = numbers[i];
            position++;
        }
    }

    // Fill remaining positions with zeros
    while (position < numbers.length) {
        numbers[position] = 0;
        position++;
    }

    console.log("Result: " + numbers);
}

moveZerosToEnd();