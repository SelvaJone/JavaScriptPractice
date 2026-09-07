function isAnagram(str1, str2) {
 let newStr1=str1.toLowerCase().split("").sort();
 let newStr2=str2.toLowerCase().split("").sort();
if(newStr1.join("")===newStr2.join("")){
    console.log(str1 +" and "+str2 + " are anagram")
}else{
    console.log(str1+" and "+str2 + " are not anagram")
}
    
}
isAnagram("listen" , "silent");
isAnagram("hello"   , "world" ) ; 
isAnagram("triangle" ,"integral");