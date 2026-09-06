function twoSumDuplicate() {
    const numbers = [3, 3, 4, 5, 7];
    const target = 6;

    let seen = new Map();

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        let needed = target - number;

        if (seen.has(needed)) {
            return [seen.get(needed), index];
        }

        seen.set(number, index);
    }

    return [];
}

console.log(twoSumDuplicate());