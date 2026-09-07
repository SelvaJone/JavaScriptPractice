function removeDuplicateChars(str) {
let result = '';
let charSet = new Set();
for(let ch of str){
    if(!charSet.has(ch)){
        charSet.add(ch);
        result += ch;
    }
}
return result;
}
let result = removeDuplicateChars("hello world");
console.log("String after removing duplicate characters: " + result);