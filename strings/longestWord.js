function findLongestWord(inputStr) {

    let trimmedStr = inputStr.trim();

    if (trimmedStr !== "") {

        let strArr = trimmedStr.split(/\s+/);
        let longestWord = "";
        let length = 0;

        for (let str of strArr) {
            if (str.length > length) {
                longestWord = str;
                length = str.length;
            }
        }

        console.log(
            "The longest word is " + longestWord +
            " length " + length
        );

    } else {
        console.log("empty input");
    }
}

findLongestWord("Hello  beautiful  world   welcome to coding world");
findLongestWord("      ");