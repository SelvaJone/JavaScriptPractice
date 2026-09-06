function findDuplicatesSet() {
    const numbers = [10, 20, 30, 20, 40, 10];

    let seen = new Set();

    for (let number of numbers) {

        if (seen.has(number)) {
            console.log("Duplicate number: " + number);
        } else {
            seen.add(number);
        }
    }
}

findDuplicatesSet();