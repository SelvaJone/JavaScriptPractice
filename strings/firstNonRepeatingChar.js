function firstNonRepeatingCh(){
    let inputStr = "hhello world";
    let frequency= new Map();
    for(let ch of inputStr){
        if(frequency.has(ch)){
            frequency.set(ch,frequency.get(ch)+1);
        }else{
            frequency.set(ch,1);
        }
    }
    for(let ch of inputStr){
        if(frequency.get(ch)===1){
            console.log("The first non repeating charater:"+ch);
            break;
        }

    }

    

}
firstNonRepeatingCh();
