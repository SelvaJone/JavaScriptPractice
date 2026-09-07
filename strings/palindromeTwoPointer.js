function isPalindromeTwoPointer(inputStr) {

    for (let str of inputStr) {

        let left = 0;
        let right = str.length - 1;
        let isPalindrome = true;

        while (left < right) {

            if (str.charAt(left) !== str.charAt(right)) {
                isPalindrome = false;
                break;
            }

            left++;
            right--;
        }

        if (isPalindrome) {
            console.log(str + " is a palindrome");
        } else {
            console.log(str + " is not a palindrome");
        }
    }
}

isPalindromeTwoPointer(["madam", "level", "hello"]);