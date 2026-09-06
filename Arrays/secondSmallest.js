function secondSmallest() {
    const numbers = [10, 45, 23, 89, 12, 67];

    let smallest = numbers[0];
    let secondSmallest = Infinity;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
            secondSmallest = numbers[i];
        }
    }

    console.log("Smallest number: " + smallest);
    console.log("Second smallest number: " + secondSmallest);
}

secondSmallest();