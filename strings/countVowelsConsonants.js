function countVowelsAndConsonants(inputStr) {
    let normalizedStr = inputStr.replace(/\s/g, "").toLowerCase();
    console.log(normalizedStr);

    let vowelCount = 0;
    let consonantCount = 0;

    for (let ch of normalizedStr) {
        if ("aeiou".includes(ch)) {
            vowelCount++;
        } else if (/[a-z]/.test(ch)) {
            consonantCount++;
        }
    }

    console.log("The vowel Count " + vowelCount);
    console.log("The consonant Count " + consonantCount);
}

countVowelsAndConsonants("hello beautiful world123");