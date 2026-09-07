function countWords(inputStr) {

    let trimmedStr = inputStr.trim();

    let wordCount = 0;

    if (trimmedStr !== "") {

        let strArr = trimmedStr.split(/\s+/);
        wordCount = strArr.length;
    }

    console.log("word count " + wordCount);
}

countWords("Hello beautiful world welcome to coding world");
countWords("      ");