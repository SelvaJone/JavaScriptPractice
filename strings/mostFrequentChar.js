//using  Object technique
function mostFrequentChar(str) {
  let charCount = {};
  let maxChar = "";
  let maxCount = 0;
  for (let ch of str) {
    charCount[ch] = (charCount[ch] || 0) + 1;
    if (charCount[ch] > maxCount) {
      maxCount = charCount[ch];
      maxChar = ch;
    }
  }
  return maxChar;
}
let result = mostFrequentChar("programmingmg");
console.log("Most frequent character: " + result);

//using Map technique
function mostFrequentCh() {
  let inputStr = "programmingmg";
  let frequency = new Map();
  for (let char of inputStr) {
    if (frequency.has(char)) {
      frequency.set(char, frequency.get(char) + 1);
    } else {
      frequency.set(char, 1);
    }
  }
  let maxFrequent = 0;
  let maxFrequentChar = "";
  for (let char of inputStr) {
    if (frequency.get(char) > maxFrequent) {
      maxFrequent = frequency.get(char);
      maxFrequentChar = char;
    }
  }
  console.log(
    "The most frequent character:" +
      maxFrequentChar +
      " occurs " +
      maxFrequent +
      " times",
  );
}
mostFrequentCh();
