function reverseArray() {
    let numbers = [10, 20, 30, 40, 50];

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let temp = numbers[left];
        numbers[left] = numbers[right];
        numbers[right] = temp;

        left++;
        right--;
    }

    console.log("Reversed array: " + numbers);
}

reverseArray();