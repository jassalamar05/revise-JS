// ⭐⭐⭐⭐⭐ Top 25 (Interview Favorites)

// Agar time kam ho, to ye 25 zaroor karo:

// Swap Two Numbers
// using temp variables 
function swap(a,b){
     [a,b]=[b,a]

     return[a,b]
}
console.log(swap(2,4))

//temp ke sath
function SwapTemp(a,b){
    let temp=a;
    a=b;
    b=temp;

    return [a,b]
}
console.log(SwapTemp(5,6))
// Ev2n / Odd
function EO(a){
    return a%2===0?"even":"odd"
}
console.log(EO(12))

// Largest Number
function Largest(a,b,c){
    if(a>b && a>c) return "a";
    else if(b>a && b>c) return "b";
    else return "c"
}
console.log(Largest(2,3,4))
// Factorial
function fact(a){
    let facts=1;

    for(let i=1;i<=a;i++){
        facts*=i
    }
    return facts
}
console.log(fact(4))
// Fibonacci
function Fibo(a){
    let first=0;
    let second=1;

    for(let i=1;i<=a;i++){
        console.log(first,"fibo")

        let temp=first+second;
        first=second;
        second=temp
    }
    return first
}
console.log(Fibo(10),"fibo")

// one more method

function F(a){
    let f=0;
    let s=1;

    console.log(f)
    console.log(s)

    for(let i=2;i<=a;i++){
        let T=f+s;
        console.log(T)
        f=s;
        s=T
    }
}
console.log(F(4),"d")
// Prime Number
function Prime(n){
    if(n<=1) return "false number kro greater than 1"

    for(let i=2;i<n;i++){
        if(n%i===0){
            return "false number divide ho reha hai"
        }
    }
    return "true"
}
console.log(Prime(5))
// Prime in Rannge
let numbers=[0,1,2,4,5,3,12,2,1,1,1];
let freq={}
for(let ch of numbers){
   if(ch%2===0){
    freq[ch]="even"
   }else{
    freq[ch]="odd"
   }
}
console.log(freq)

// prime number kro print okay:::::
//yeh critical cheez hjai :::

//pehele list check kro badd ch prime dedo number jehre bhi hege aa

function Prime(a){
    if(a<=1) return false;

    for(let i=2;i<a;i++){
        if(a%i==0){
            return false
        }
    }
    return true;
}

    let a=10;
    let arr=[]
    for(let i=0;i<=a;i++){
        if(Prime(i)){
            arr.push(i)
        }
    }
console.log(arr)
// Reverse Number

function reverse(k){
    let reve="";

    while(k>0){
        let digit=k%10;
        reve+=digit;
        k=Math.floor(k/10)
    }
    return reve
}
console.log(reverse(123))

// Palindrome Number
// same agar check krna then 121 === 121

function palindrome(n){
    let yes=n;

    let reverse="";

    while(n>0){
        let digit = n%10;
        reverse+=digit;
        n=Math.floor(n/10)
    }
    if(yes==reverse){
        console.log("it is a palindomre")
    }else{
        console.log("it is not a palindrome")
    }
}
palindrome(12123)
// Armstrong Number
//1^3 + 5^3 + 3^3  === 153;

function arm(a){
    let armstring=a;
    let count=0;
    let sum=0;

    while(a>0){
        count++;
        a=Math.floor(a/10);
    }

    let arm=armstring
    while(arm>0){
        let digit=arm%10;
        sum+=Math.pow(digit,count)
        arm=Math.floor(arm/10)
    }
      if(sum==armstring){
        console.log("it is a armstirng numer")
      }else{
        console.log("it is not a armstn numner")
      }
}
arm(153)

// Strong Number
function strong(a){
   let sum=0
   let as=a;

    while(a>0){
         let fact=1;
        let digit=a%10;
        for(let i=1;i<=digit;i++){
            fact=fact*i
        }
        sum+=fact
        a=Math.floor(a/10)
    }
    if (sum === as) {
    console.log("Strong Number");
} else {
    console.log("Not Strong Number");
}
}
(strong(145))
// Perfect Number
function perfect(n){
    let sum=0;
    let ds=n;

    for(let i=1;i<n;i++){
        if(n%i===0){
           sum+=i
        }
    }
    if(ds==sum){
        console.log("perfect number")
    }else{
        console.log("it is not a perfect number")
    }
}
perfect(6)
// Count Digits
function digits(c){
    let count=0;
    let sum=0
    while(c>0){
        let digit=c%10;
        sum+=digit
        count++;
        c=Math.floor(c/10)
    }
    return sum
}
console.log(digits(123))

// Largest Digit
function largestdigit(a){
    let largest =0;

    while(a>0){ 
        let digit=a%10; 
        if(digit>largest){
            largest=digit
        }
        a=Math.floor(a/10)
    }
    console.log(largest)
}
(largestdigit(12345))
// GCD
function GCD(a,b){
    let gcd=1;

    for(let i=0;i<=a;i++){
        if(a%i===0 && b%i===0){
            gcd=i
        }
    }
    return gcd;
}
console.log(GCD(12,18),"GCD")
// LCM
function LCM(a,b){
    let i=1;

    while(true){

        let result=a*i;

        if(result%b===0){
            return result
        }
        i++
    }
}
console.log(LCM(12,18))
// Leap Year
function LeapYear(m){
    if(m%400===0){
        return "Leap Year"
    }
    else if(m%100!==0){
        return "not a leap year"
    }else if(m%4===0){
        return "Leap Year"
    }
}
console.log(LeapYear(2019))
// Decimal → Binary
function DtB(b){
    let decimal=0;
    let position=0

    while(b>0){
        let digit=b%10;
        decimal+=digit*Math.pow(2,position)
        position++
        b=Math.floor(b/10)
    }
    return decimal
}
console.log(DtB(1100),"decimal")
// Binary → Decimal
function BTD(a){
    let binary=""

    while(a>0){
        let digit=a%2;
        binary=digit+binary;
        a=Math.floor(a/2)
    }
    return binary
}
console.log(BTD(12))
// Celsius → Fahrenheit
function Cal(cal){
    return (cal*1.8)+32
}
console.log(Cal(100))
// Fahrenheit → Celsius
function Faren(faren){
    return (faren-32)/1.8
}
console.log(Faren(212))
// Power of Number
function PON(a){
    return Math.pow(a,a)
}
console.log(PON(4))
// Multiplication Table
function Multiply(t){
    for(let i=1;i<=10;i++){
        console.log(t,"*",i,"=",t*i)
    }
}
(Multiply(10))
// Check Power of 2

//bit manupulation tarika
function Power(n){
    return n>0 && (n&(n-1))===0
}
console.log(Power(15))


function PO(e){
    if(e<0) return false

    while(e>1){
        if(e%2!==0){
            return false
        }

        e=e/2;
    }
    return true
}
console.log(PO(13))