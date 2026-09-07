function reverseStr(inputStr){
    let revStr="";
    for(let index=inputStr.length-1;index>=0;index--){
        revStr=revStr+inputStr.charAt(index);
    }
    return revStr;
}
console.log(reverseStr("selva"));