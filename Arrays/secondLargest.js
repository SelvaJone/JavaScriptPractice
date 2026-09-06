function secondLargest() {
    const numbers = [10, 45, 23, 89, 12, 67];

    let largest = numbers[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            secondLargest = largest;
            largest = numbers[i];
        } else if (numbers[i] > secondLargest && numbers[i] !== largest) {
            secondLargest = numbers[i];
        }
    }

    console.log("Largest number: " + largest);
    console.log("Second largest number: " + secondLargest);
}

secondLargest();