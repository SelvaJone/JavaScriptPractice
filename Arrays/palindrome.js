function checkPalindrome() {
    const numbers = [1, 2, 3, 2, 1];

    let left = 0;
    let right = numbers.length - 1;
    let isPalindrome = true;

    while (left < right) {
        if (numbers[left] !== numbers[right]) {
            isPalindrome = false;
            break;
        }

        left++;
        right--;
    }

    console.log("Is palindrome: " + isPalindrome);
}

checkPalindrome();