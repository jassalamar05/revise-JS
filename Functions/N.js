// ⭐⭐⭐⭐⭐ Basic Function Programs (Must)
// 1. Print Hello World using function
function hello(){
    console.log("Hello World");
}
hello()


// 2. Print Name
function P(){
    console.log("name")
}
P()


// 3. Add Two Numbers

// shortest way to add 2 numbers  , sub same , multipoley same , divide same
const add=(a,b)=>a+b;
console.log(add(2,1))

// 7. Find Square           , cube mei bass a*a*a
const square=(a)=>a*a;
console.log(square(2))

// 9. Find Area of Rectangle area of rectangel = l * b;
function area(lenght,bredth){
    return lenght*bredth
}
console.log(area(2,4) , `cm2`)
// 10. Find Area of Circle
function Circle(r){
    const PI=3.14;

    return PI*r*r
}
console.log(Circle(2))
// 11. Find Perimeter of Rectangle  2(lenth+wiodht)
function perimeter(lenght,width){
    return 2*(lenght+width)
}
console.log(perimeter(3,4))

// 12. Celsius to Fahrenheit
function Cel(celsius) {
    return (celsius * 1.8) + 32;
}
console.log(Cel(100));

// 13. Fahrenheit to Celsius
function faren(F){
    return (F-32)/1.8
}
console.log(faren(212))
// 14. Check Even or Odd
function Evenodd(number){
    return number%2===0?"even":"odd"
}
console.log(Evenodd(11))
// 15. Check Positive, Negative or Zero
function Pnz(number){
    if(number===0){
        console.log("zero")
    }else if(number>0){
        console.log("positive")
    }else{
        console.log("negitive")
    }
}
Pnz(-1)
// 16. Find Maximum of Two Numbers cot three numbers  && hence here bhi appko bass sign putha karna hai and you will get a minumum resutl
function maximun(a,b,c){
    if(a>b && a>c){
        return "a is gretesrt"     
    }else if(b>a && b>c){
        return " b is greatest "
    }else{
        return "c is greatest"
    }
}
console.log(maximun(1,2,4))
// 19. Swap Two Numbers
function swap(a,b){
    return [a,b] =[b,a]
}
console.log(swap(1,2))

// another way 

function swaps(p,b){
    let temp=p;
    p=b;
    b=temp;

    return [p,b]
}
console.log(swaps(3,1))
// 20. Find Absolute Value



function absolute(num){
    return num<0?-num:num; 
    // -num ka matalb hgau ke dekhoi = - (-9)  = 9 sign ulta karna 
}
console.log(absolute(-9))


console.log(Math.abs(-545))




// ⭐⭐⭐⭐⭐ Number Programs
// ⭐ Group 2: Number Logic (15)
// Ye order follow karo:
// Reverse Number
function revs(number){
    let reverse=0;

    while(number > 0){
        let digit = number %10;

        reverse=reverse*10+digit;

        number=Math.floor(number/10);
    }
    return reverse;
}

console.log(revs(12344314312))

// abhi jo upper sikha hai iske realted quesion karuga kuch okay ??? ky ho tum ham ham puchte hai tu kya hai be

// 1. Sum of Digits ⭐⭐⭐⭐⭐
function Sum(number){
    let sum=0;

    while(number>0){

        let digits = number%10;

        sum+=digits

        number=Math.floor(number/10)
    }
    return sum
}
console.log(Sum(123))

// 2. Count Digits ⭐⭐⭐⭐⭐

function count(number){
    let dekh=0;

    while(number>0){
        let digit=number%10;

        dekh++;

        number=Math.floor(number/10)
    }
    return dekh
}
console.log(count(123123123))

// 3. Product of Digits ⭐⭐⭐⭐
function product(number){
    let prod=1;

    while(number>0){
        let digit=number%10;

        prod=prod*digit;

        number=Math.floor(number/10)
    }
    return prod
}
console.log(product(1233))

// 4. Largest Digit ⭐⭐⭐⭐
function largest(number){

    if(number===0)  return 0;

    number=Math.abs(number);
    let large=0;

    while(number>0){
        let digit=number%10;

        if(digit>large){
            large=digit
        }
    
        number=Math.floor(number/10)
    }
    return large;
}
console.log(largest(102349))

// ✅ Palindrome Number
function pali(number){
    let n=number;

    if(number<0) return false;

    let palindrome=0;

    while(number>0){
        let digits=number%10;

        palindrome=palindrome*10+digits

        number=Math.floor(number/10);
    }
    return n === palindrome  // maii ithe hi bana dita saman sara what to do next ?
}
console.log(pali(55))
// ✅ Armstrong Number

function armstrong(num){
    let count=num.toString().length;
    let n=num;
    let arm=0;
    while(num>0){
        let digit=num%10;
        arm+=Math.pow(digit,count)  // imp step in this armsting number
        num=Math.floor(num/10)
    }
    return n === arm
}
console.log(armstrong(153))
console.log(armstrong(121))

// agar woh kahe bina inbulit function use kiya kro then fir mai bina inbulit fucntion use krke karluga 
// ✅ Armstrong Number (Without toString())

function armstrong(num) {
    let original = num;

    // Handle negative numbers
    if (num < 0)  return false;
    // Count digits
    let count = 0;
    let temp = num;

    if (temp === 0) {
        count = 1;
    } else {
        while (temp > 0) {
            count++;
            temp = Math.floor(temp / 10);
        }
    }

    // Calculate Armstrong sum
    let sum = 0;
    temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, count);
        temp = Math.floor(temp / 10);
    }

    return original === sum;
}

console.log(armstrong(153));   // true
console.log(armstrong(370));   // true
console.log(armstrong(371));   // true
console.log(armstrong(407));   // true
console.log(armstrong(9474));  // true
console.log(armstrong(123));   // false


// ✅ Strong Number
// normal fcotriak 

function factorail(number){
    let fact=1;

    for(let i=1;i<=number;i++){
        fact=fact*i
    }
    return fact;
}

// here factorial number of program is ready to serve us
function strong(num){
    let n=num;
    let str=0

    while(num>0){

        let digits=num%10;
        str+=factorail(digits)
        num=Math.floor(num/10)    
    }
    return n === str
}
console.log(strong(145))


// ✅ Harshad Number

function Harshad(number){
    let o=number;
    let total=0

    while(number>0){

        let digits=number%10;

        total+=digits;

        number=Math.floor(number/10)

    }
    return o%total ===0
}
console.log(Harshad(18),"hashad number")
// ✅ Spy Number                yewh sab yehi pattern folloe karte hai .
function Spy(number){
    let add =0;
    let multiply=1;

    while(number>0){

        let digit=number%10;

        add+=digit
        multiply*=digit
        
        number=Math.floor(number/10)
    }
    return add === multiply;
}
console.log(Spy(1124))

// Fibonacci
// series hougi totality di 

function fibo(number){
    let first=0;
    let second=1;

    let array=[];
     
    for(let i=0;i<=number;i++){
       array.push(first)
        
        let next=first+second;
        first=second;
        second=next
    }
    return array
}
console.log(fibo(10))
// Prime Number
function prime(numbrz){

    if(numbrz < 2){ return false}

    for(let i=2;i<=Math.sqrt(numbrz);i++){
        if(numbrz  %  i === 0){
            return false;
        }
    }
    return true;
}
console.log(prime(4))
// Prime Numbers in Range
// case 1 : [prime checking ko likhna alag]
function isPrime(number){

    if(number<2) return false;

    for(let i=2;i<=Math.sqrt(number);i++){
        if(number % i===0){
            return false
        }
    }
    return true;
}

function isRange(start,end){
    for(let i=start ;i<=end;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
isRange(1,20)
// Perfect Number
function perfect(number){
    
    let sum=0;

    for(let i=1;i<number;i++){
        if(number%i === 0){
            sum+=i ;
        }
    }
    return sum === number;
}
console.log(perfect(6),"perfect")
// Automorphic Number
function auto(num){
    let square=num*num;

    let temp=num;
    let digit=0;

    // counting digits kitne hai iuss hisab se divide krege na
    while(temp>0){
        digit++;

    temp=Math.floor(temp/10);
    }

    //edge case 0
    if(num ===0 ){
        digit=1
    }

    let lastDigit=square % Math.pow(10,digit)
    return lastDigit === num
}
console.log(auto(25))
// Neon Number
function Neon(nums){
    let square=nums*nums;

    let sum=0;
    while(square>0){
        let digit=square%10;

        sum+=digit;

        square=Math.floor(square/10)
    }

    return nums === sum
}
console.log(Neon(8) ,"neon")
// Duck Number
// function duck(num){
//     if(num[0] === 0) return false;   // galat hai kyo ki woh number hai string ya array nei hai samjha

//     while(num>0){
//         let digit=num%10;

//         if(digit!==0){
//             return false
//         }
//         num=Math.floor(num/10)
//     }
//     return true
// }
// console.log(duck(1023))



function duck(num) {

    while (num > 0) {
        let digit = num % 10;

        if (digit === 0) {
            return true;
        }

        num = Math.floor(num / 10);
    }

    return false;
}

console.log(duck(1023)); // true
console.log(duck(1234)); // false
console.log(duck(205)); // true
// Sunny Number

function sunny(number) {

    let next = number + 1; //next num,be ki aa   next =9
    let root = Math.sqrt(next); // root check kiya 3*3 =9
    return root % 1 === 0;
}

console.log(sunny(8));   // true
console.log(sunny(15));  // true
console.log(sunny(10));  // false



// ⭐ Group 3: Digit Programs (15)
// Count Digits
function countDigit(num){
    let count=0;

    while(num>0){
        let digits=num%10;
        count++;

        num=Math.floor(num/10)
    }
    return count
}
console.log(countDigit(123123))
// Sum of Digits
function SumDigits(num){
    let sum=0;
    while(num>0){
        let digits=num%10;

        sum+=digits;

        num=Math.floor(num/10)
    }
    return sum
}
console.log(SumDigits(123))
// Product of Digits

//same bas ohho condition changed 

// First Digit
function First(number){
    while(number>=10){    
        number=Math.floor(number/10)
    }
    return number
}
console.log(First(123))
// Last Digit

function Last(num){
    while(num>0){
        return num%10
    }
}
console.log(Last(1234))
// Middle Digit

// isme string ki length check krke index nalao siring ka woh appne app uske equivaenbt nikal dga saman

function Middle(number){
    while(number>0){
        let string=number.toString()

        return string[Math.floor(string.length/2)]
    }
}
console.log(Middle(12345))

// without string kya hofa dekho jara abb ladle

function DigitMidlle(number){
    let temp=number;
    let count=0;

    while(number>0){
        count++;
        number=Math.floor(number/10)
    }
    
    let divideBY= 10**(Math.floor(count/2)) // iska matalb ki power kini ho jaugi according to number houga sab kuch

    return Math.floor(temp/divideBY)%10;  // jab numbeer aisa ban gay 1231.231 %10 = 1 middel number and floor ne piche sa sab decimal uda diya hai 
}
console.log(DigitMidlle(1231231))

// Sum of Even Digits
function Sum(number){
    let s=0;

    while(number>0){
        let digit=number%10;

        if(digit %2 ===0 ){
            s+=digit
        }

        number=Math.floor(number/10)
    }
    return s
}
console.log(Sum(123466))
// Sum of Odd Digits

// same for the odd digits logic remains the same

// Count Even Digits
function counts(number){
    let count=0;

    while(number>0){
        let digit=number%10;
        
        if(digit%2===0){
            count++
        }

    number=Math.floor(number/10)
    }
    return count;
}
console.log(counts(123123))
// Count Odd Digits   // same concept bas conditoin ek change krdo 

// Largest Digit   // 123  = 3 largest digit let inital digit=0;
function Large(number){
    let largest=0;

    while(number>0){
        let digit=number%10;
        if(largest<digit){
            largest=digit
        }

    number=Math.floor(number/10)
    }
    return largest
}
console.log(Large(92344))
// Smallest Digit
function smallesst(number){
    let small=9;

    while(number>0){
        let digit=number%10;

        if(small>digit){
            small=digit;
        }

        number=Math.floor(number/10)
    }
    return small
}
console.log(smallesst(123450))
// Remove Last Digit
function remove(s){
    while(s>0){
        return Math.floor(s%10)
    }
    return s
}
console.log(remove(123))
// Remove First Digit
function removeFirst(num){
    while(num>=10){
        let digit=num%10;   // 123 ===> 3 as the largest number

        num=Math.floor(num/10)  
    }
    return num
}
console.log(removeFirst(123),"first")
// Frequency of Digits
function freq(number){
    let frequency={};

    while(number>0){
        let digit =number%10;

        if(frequency[digit]){
            frequency[digit]++
        }else{
            frequency[digit]=1
        }

        number=Math.floor(number/10)
    }
return frequency
}
console.log(freq(123131313))


// ⭐ Group 4: Math Programs (10)
// GCD (HCF)
function  gcd(a,b){

    let ans=1;

    for(let i=0;i<a;i++){
        if(a%i === 0 && b%i === 0){
            ans=i
        }
    }
    return ans
}
console.log(gcd(12,18))
// LCM
function LCM(a,b){
    let i=1;

    while(true){
        let ans=a*i;

        if(ans%b===0){
         return ans
        }
        i++
    }
}
console.log(LCM(12,18))
// Leap Year

function LeapYear(year) {

    // Rule 1:
    // Sabse pehle 400 check karte hain.
    // Kyun?
    // Kyunki jo year 400 se divide hota hai (jaise 2000, 2400),
    // woh hamesha Leap Year hota hai.
    // Agar pehle 100 check karenge, to 2000 galat "Not Leap Year" ban jayega.
    if (year % 400 === 0) {
        return "Leap Year";
    }

    // Rule 2:
    // Agar 400 se divide nahi hua,
    // to 100 check karte hain.
    // Jo year 100 se divide hota hai (1700, 1800, 1900, 2100),
    // woh Leap Year nahi hota.
    else if (year % 100 === 0) {
        return "Not a Leap Year";
    }

    // Rule 3:
    // Agar year 100 se bhi divide nahi hota,
    // aur 4 se divide hota hai,
    // to woh Leap Year hota hai.
    // Example: 2020, 2024, 2028
    else if (year % 4 === 0) {
        return "Leap Year";
    }

    // Rule 4:
    // Agar 4 se bhi divide nahi hua,
    // to Leap Year nahi hai.
    else {
        return "Not a Leap Year";
    }
}

console.log(LeapYear(2100)); // Not a Leap Year
console.log(LeapYear(2400)); // Leap Year
console.log(LeapYear(2024)); // Leap Year
console.log(LeapYear(2023)); // Not a Leap Year
// Celsius → Fahrenheit
function Cal(c){
    return (c*1.8)+32
}
console.log(Cal(100))
// Fahrenheit → Celsius
function Faren(n){
    return (n-32)/1.8
}
console.log(Faren(212))
// Area of Circle
function Circle(a){
    const PI=3.14;

    return PI*(Math.pow(a,2))
}
console.log(Circle(2))
// Area of Rectangle
function Rectangle(l,w){
    return l*w
}
console.log(Rectangle(2,3))
// Perimeter of Rectangle
function Perimeter(l,b){
    return  2*(l+b)
}
console.log(Perimeter(2,1))
// Simple Interest
function SI(p,r,t){
    return p*r*t/100;
}
console.log(SI(1000,0.5,4))

// thofa aurr profesionla code that is good for you if anyine says that years ka nikalo and months ka toh kiase nikaloge.

function si(p,r,t,units){

    if(units === "months"){
        t=t/12
    }else if(units === "days"){
        t=t/365
    }

    return (p*r*t)/100
}
console.log(si(1000,12,10,"months"))
// Compound Interest
function CI(p,r,t){

    let amount=p*Math.pow(1+r/100,t)

    let interest = amount-p;

    return interest
}
console.log(CI(1000,12,10))






// ⭐ Group 5: Conversion Programs (10)
// Decimal → Binary
function DTB(n){
    let f="";


    while(n>0){
        let digit=n%2;   // yeh use kiya hai kyoki batt ho rahi binary number ki

        f=digit+f;

        n=Math.floor(n/2); // isme divid bhi 2 se karna hai bass
    }
    return f
}
console.log(DTB(8))
// Binary → Decimal

// her eabb mere padd binary hai mer eko convert karna hai decimalk mei toh mai use karuga power of 2 ka payimanan
function BTD(j){
    let power=0;

    let decimal=0;

    while(j>0){
        let digit=j%10; // last digit bHAR KAD dita okay.
        
        // 1010 toh 0 bhar a gya hai 

        decimal+=digit * Math.pow (2 , power)
        power++;

        j=Math.floor(j/10);
        // last 0 bhar kad leya
    }
    return decimal
}
console.log(BTD(1100),"btd")
// Decimal → Octal
function DTO(m){
    let Octal="";


    while(m>0){ 
        let d=m%8;

         
        Octal=d+Octal;
        m=Math.floor(m/8)
    }
    return Octal
}
console.log(DTO(4328))
// Octal → Decimal
function OTD(k){
    let decimal=0;
    let power=0;

   
    while(k>0){
        let digit=k%10;
        if(digit>7){
            return "invlaid octal number"
        }
        decimal+= digit * Math.pow(8,power)
        power++;
        k=Math.floor(k/10)
    
    }
    return decimal
}

console.log(OTD(101111221111111))
// Decimal → Hexadecimal

function Hexa(j){
    let hexa="";

    while(j>0){
        let digit=j%16;

        hexa=digit+hexa;

        j=Math.floor(j/16)
    }
    return hexa
}
console.log(Hexa(12312319988));
// Hexadecimal → Decimal
function HTD(number){
    let decimal=0;
    let power=0;

    while(number.length>0){ // kyoki ham string denge consoel mei na ki number

        let digit=number[number.length-1]  // read kro bas

        if(digit === "A"){
            digit=10
        }
        else if(digit ==="B"){
            digit=11
        }
        else if(digit ==="C"){
            digit =12
        }
        else if(digit === "D"){
            digit =13
        }else{
            digit=Number(digit)
        }

        decimal+= digit * Math.pow(16,power)
        power++

        number=number.slice(0,number.length-1)
    }   
    return decimal
}
console.log(HTD("123124124ABCD"),"hexatoD")
// Decimal → Roman

// Decimal → Roman Numeral

function DTR(number) {

    let roman = "";

    while (number > 0) {

        if (number >= 1000) {
            roman += "M";
            number -= 1000;
        }

        else if (number >= 900) {
            roman += "CM";
            number -= 900;
        }

        else if (number >= 500) {
            roman += "D";
            number -= 500;
        }

        else if (number >= 400) {
            roman += "CD";
            number -= 400;
        }

        else if (number >= 100) {
            roman += "C";
            number -= 100;
        }

        else if (number >= 90) {
            roman += "XC";
            number -= 90;
        }

        else if (number >= 50) {
            roman += "L";
            number -= 50;
        }

        else if (number >= 40) {
            roman += "XL";
            number -= 40;
        }

        else if (number >= 10) {
            roman += "X";
            number -= 10;
        }

        else if (number >= 9) {
            roman += "IX";
            number -= 9;
        }

        else if (number >= 5) {
            roman += "V";
            number -= 5;
        }

        else if (number >= 4) {
            roman += "IV";
            number -= 4;
        }

        else {
            roman += "I";
            number -= 1;
        }

    }

    return roman;
}

console.log(DTR(354));   // CCCLIV
console.log(DTR(1994));  // MCMXCIV
console.log(DTR(58));    // LVIII
console.log(DTR(2026));  // MMXXVI
// Roman → Decimal

function RtD(o){
   // Roman symbols ki value store ki hai

   //step 1 : map the roman letters
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    //step 2 sotring a space wher you can just have the thiunfs 
    let decimal=0;

    //step 3 : starting from the loop 
    // roman starting sting krege form left ot right

    for(let i=0;i<o.length;i++){
        //current rimman leter ki vaklue

        let current=map[o[i]]  // steo4 : map kro index se and dono ko check kro kn bada kon chota

        let next=map[o[i+1]]

        //check kri

        if(current<next){
            decimal-=current
        }

        else{
            decimal+=current
        }
   
    }
    return decimal
}
console.log(RtD("IC"))
// Binary → Hexadecimal
// Hexadecimal → Binary