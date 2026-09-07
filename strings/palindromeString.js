function isPalindrome(inputStr) {

    let revStr = "";

    for (let str of inputStr) {

        for (let index = str.length - 1; index >= 0; index--) {
            revStr = revStr + str.charAt(index);
        }

        if (str === revStr) {
            console.log(str + " is a palindrome");
        } else {
            console.log(str + " is not a palindrome");
        }

        revStr = "";
    }
}

isPalindrome(["madam", "level", "hello"]);