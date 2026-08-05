// 🟢 Beginner (⭐⭐)
// Reverse a String ⭐⭐⭐
// "hello" → "olleh"
function reverseString(str){
    let s="";

    let last=str.length-1 ;
    for(let i=last;i>=0;i--){
        s+=str[i];
    }
    return s;
}
console.log(reverseString("hello"));

// nuilt in ficntis 
let f="sldkjasd";
let re=f.split("").reverse().join("");
console.log(re);

//by using spread operator
let k="asdjhansd";
let SO=[...k].reverse().join("")
console.log(SO);

// Check Palindrome ⭐⭐⭐⭐
// "madam" → true

function Pali(str){
    let original=str;
    let reverse="";

    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    if(original === reverse){
        return "palindrome"
    }else{
        return "not a palindrome"
    }
}
console.log(Pali("madam"))
// Count Vowels ⭐⭐⭐
// "javascript" → 3


function Vowels(str){
    let count=0;
    let vowels="aeiou";

    for(let ch of str){
        if(vowels.includes(ch)){
            count++;
        }
    }
    return count;
}
console.log(Vowels("amardeep"))
// Count Consonants
function Cosonent(str){
    let count=0;
    let vowels="aeiou";

    for(let ch of str){
        if(!vowels.includes(ch)){
            count++;
        }
    }
    return count;
}
console.log(Cosonent("aeiou"))
// Count Total Characters
function TotalCharacter(str){
    let count=0;

    for(let ch of str){
        count++;
    }
    return count++;
}
console.log(TotalCharacter("amardeep"))
// Convert String to Uppercase
function ToUpperCAsre(str){
    let up="";

    for(let ch of str){
        let ascii=ch.charCodeAt(0)  

        if(ascii >=65 && ascii <=90){
            up+=String.fromCharCode(ascii+32)
        }else{
            up+=ch;
        }
    }
    return up;
}
console.log(ToUpperCAsre("amarASDSADSDeep"))


// Convert String to Lowercase
function TolowerCase(string){
    let ro="";
    for(let ch of string){  // kala kala ch chakya 
        let asc=ch.charCodeAt(0)  // itho [ch] nu number ch convert kar leya aa 
        if(asc>=97 && asc<=122){          // [ch]  is number is grater than 97 tghat is good;
            ro+=String.fromCharCode(asc-32)     // 
        }else{
            ro+=ch;
        }
    }
    return ro;
}
console.log(TolowerCase("AkjhfsdkufhsdhP"))
// Capitalize First Letter
function first(str){
    let full="";

    let first=str.charCodeAt(0);

    //Agar first char lower calse ha toh

    if(first >=97 && first<=122){
        full+=String.fromCharCode(first -32)
    }else{
        full+=str[0];
    }

    //baki character wasie hi rakhega
    for(let i=1;i<str.length;i++){
        full+=str[i];
    }
    return full;
}
console.log(first("asdasAASDA"))
// Capitalize Every Word ⭐⭐⭐
function Captial(str){
    
}
// Remove Extra Spaces ⭐⭐
function Extra(str){

    let p=''
    for(let ch of str){
        if(ch!== " "){
            p+=ch;
        }
    }
    return p;
}
console.log(Extra("asd asd asd asd asd"))