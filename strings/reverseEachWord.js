function reverseEachWord(str) {

    let words = str.trim().split(/\s+/);
    let reversedSentence = "";

    for (let word of words) {

        for (let index = word.length - 1; index >= 0; index--) {
            reversedSentence = reversedSentence + word.charAt(index);
        }

        reversedSentence = reversedSentence + " ";
    }

    console.log("The original sentence: " + str);

    return reversedSentence.trim();
}

let revWord = reverseEachWord("JavaScript is easy");

console.log("The reversed sentence: " + revWord);