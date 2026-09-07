function leastFrequentChar(str) {
    let charCount = {};

    for (let ch of str) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }
    let minChar = "";
    let minCount = Infinity;
    for (let ch in charCount) {
        if (charCount[ch] < minCount) {
            minCount = charCount[ch];
            minChar = ch;
        }
    }
    return minChar;
}
let result = leastFrequentChar("programmingmg");
console.log("Least frequent character: " + result);