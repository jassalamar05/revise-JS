// 1. Print 5 Stars
for(let i=1;i<=5;i++){
    console.log("+")
}



//suppose har line ka apna stars
for(let i=1;i<=5;i++){
    let stars=""

    for(let j=1;j<=i;j++){
       stars+="*"
    }
    console.log(stars)
}


//ek aur pattern hai 

for(let i=1;i<=5;i++){
    let add=""

    for(let i=1;i<=5;i++){
        add+="&"
    }
    console.log(add)
}


// 2. Print N Stars

// Ya aur chhota: *****************
// console.log("*") → Print every iteration
// str += "*" → Build every iteration, Print once at the end
function star(n){
    let s="";

    for(let i=0;i<n;i++){
        s+="*"
    }
    console.log(s)
}
star(10)


// 4. Square Pattern
for(let i=1;i<5;i++){
    let square ="";

    for(let i=1;i<=2;i++){
        square+="@"
    }
    console.log(square)
}


// 5. Number Square

for(let i=0;i<=4;i++){
    let number="";

    for(let i=0;i<4;i++){
        number+=1
    }
    console.log(number)
}



// 🟡 Level 2 (Easy)
// 1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=4;i++){  // rows dekhna 
    let n="";

    for(let j=1;j<=i;j++){  // coloum dekhna 
        n+=i   //alue ithe bannugi     
    }
    console.log(n,"aukha")
}


// 7 //*****
// ****
// ***
// **
// *


for(let i=5;i>=0;i--){
    let star="";
    
    for(let j=i;j>=0;j--){
        star=star+"*"
    }
    console.log(star)
}

//10 > 54321
// 5432
// 543
// 54
// 5


// i print karoge → Row ki value repeat hogi.
// j print karoge → Column ki value change hogi.

for(let i=5;i>0;i--){
    let number="";

    for(let j=i;j>0;j--){
        number+=i
    }
    console.log(number)
}

//Golden Rule
// Outer loop ek baar chalta hai, phir inner loop ko poora chalne deta hai. 
// Isliye inner loop ke dauran outer loop ki value (i) fix rehti hai.

// dekho jab tum outer loop ko 1 rakhte ho 
//tab inner loop complete hoga then woh outer loop 2 par jayega 
//so that why outer loop complete karega kaam pehele 


// A
// BB
// CCC
// DDDD
// EEEEE


for(let i=0;i<5;i++){
    let abc="";

    for(let j=0;j<i;j++){
        abc+=String.fromCharCode(64+i)
    }
    console.log(abc)
}



//this is pyramid shape struture isme dekho spcae ka rola bhi hai so ther we used 3 loops in this
//     *
//    ***
//   *****
//  *******
// ********* 

for(let i=1;i<=5;i++){  // outer loop =ROW WALI
    let star=""

    for(let j=1;j<=5-i;j++){
        star+=" "      // 5-i   space katugi jida jida i waduga 
    }

    for(let j=1;j<=2*i-1;j++ ){
        star+="*"
    }
    console.log(star)
}


//inverted pyramid
// *********
//  *******
//   *****
//    ***
//     *


for(let i=5;i>0;i--){
    let sting="";

    for(let j=5-i;j>0;j--){
        sting+=" "
    }

    for(let j=2*i-1;j>0;j--){
        sting+="*"
    }
    console.log(sting)
}


// pyramind isme kuch nai kran hai bass pyramid and inverted pyramid jo join krdo that it

let n = 5;

// Upper Pyramid
for(let i = 1; i <= n; i++){

    let pattern = "";

    for(let j = 1; j <= n-i; j++){
        pattern += " ";
    }

    for(let j = 1; j <= 2*i-1; j++){
        pattern += "*";
    }

    console.log(pattern);
}

// Lower Pyramid
for(let i = n-1; i >= 1; i--){   // isme n-1 se start kyo kiya hai ????
    //

    let pattern = "";

    for(let j = 1; j <= n-i; j++){
        pattern += " ";
    }

    for(let j = 1; j <= 2*i-1; j++){
        pattern += "*";
    }

    console.log(pattern);
}



//hollow square

// *****
// *   *
// *   *
// *   *
// *****

let nag=5;
for(let i=0;i<=nag;i++){
    let s="";

    for(let j=0;j<=nag;j++){

        if(i===0 || i===nag  || j===0 || j===n){
            s+="*"
        }else{
            s+=" "
        }
    }
    console.log(s)
}


// 17. Hollow Triangle
// *
// **
// * *
// *  *
// *****


// Main Diagonal
// i == j

// Anti Diagonal
// i + j == n + 1

// Triangle
// j <= i

// Inverted Triangle
// j <= n - i + 1

function hollowTriangle(n) {

    for (let i = 1; i <= n; i++) {

        let str = "";

        for (let j = 1; j <= i; j++) {

            if (j == 1 || i == j || i == n) {
                str += "*";
            } else {
                str += " ";
            }

        }

        console.log(str);

    }

}

hollowTriangle(5);