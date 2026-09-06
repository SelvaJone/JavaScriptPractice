function twoSum() {
    const numbers = [2, 7, 11, 15];
    const target = 18;

    let seen = new Map();

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let needed = target - number;

        if (seen.has(needed)) {
            console.log("Pair found: " + needed + " + " + number);
            console.log(
                "Indexes: " + seen.get(needed) + " & " + index
            );
            return;
        }

        seen.set(number, index);
    }

    console.log("No pair found");
}

twoSum();