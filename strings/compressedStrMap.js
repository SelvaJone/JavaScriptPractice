function compressString(str) {
let frequency=new Map();
for(let ch of str){
    if(frequency.has(ch)){
        frequency.set(ch,frequency.get(ch)+1);

    }else{
        frequency.set(ch,1);
    }
}
let compressedStr="";
for(let [key,value] of frequency){
    compressedStr=compressedStr+key+value;
}
console.log("The input: "+str);
console.log("The compressed string: "+compressedStr);
    
}
compressString("aaabbccccd")
