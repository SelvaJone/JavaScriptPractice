function findLongestWord(inputStr) {
    let trimmedStr = inputStr.trim();
    
    if (trimmedStr !== "") {
        let strArr = trimmedStr.split(/\s+/);
                let longestWord="";
        let secondLongestWord="";
        for(let str of strArr){
            if(str.length>longestWord.length){
                secondLongestWord=longestWord;
                longestWord=str;
            }else if(str.length>secondLongestWord.length){
                secondLongestWord=str;
            }
        }
        console.log("The longest word is "+longestWord +" length "+longestWord.length)
        console.log("The second longest word is "+secondLongestWord +" length "+secondLongestWord.length)
    }else{
        console.log("empty input");
    }
   

}
findLongestWord("Hello  beautiful  world   welcome to coding world");
findLongestWord("      ");
findLongestWord("JavaScript is a powerful language");
findLongestWord("Java code test");
findLongestWord("programming JavaScript testing");
findLongestWord("     ");