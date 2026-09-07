function removeSpaces(str){
    let spaceRemoved="";
    //spaceRemoved=str.replace(/\s/g,"");
    for(let i=0;i<str.length;i++){
        //remove  newline, tab, space.
        if(!/\s/.test(str.charAt(i))){
       // if(str.charAt(i)!==" "){
            spaceRemoved=spaceRemoved+str.charAt(i);
        }
    }
console.log("The space removed str:"+spaceRemoved)
}



removeSpaces("  JavaScript is awesome  ");
removeSpaces("hello   world");
removeSpaces("     ");
