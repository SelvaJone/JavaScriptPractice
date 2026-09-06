function removeDuplicates() {
    const numbers = [10, 20, 30, 20, 40, 10];

    let unique = new Set();

    for (let number of numbers) {
        unique.add(number);
    }

    console.log("Unique numbers: " + [...unique]);
}

removeDuplicates();