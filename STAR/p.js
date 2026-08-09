// 1. Basic Increasing Triangle ✅ (Base Pattern)

// *
// **
// ***
// for(let i=0;i<=3;i++){
//     let pattern="";

//     for(let j=0;j<=i;j++){
//         pattern+="*"
//     }
//     console.log(pattern)
// }


// 🟢 Level 1: Rectangle Patterns
// ****
// ****
// ****



for(let i=0;i<3;i++){
    let pattern="";
    for(let j=0;j<=4;j++){
        pattern+="*"
    }
    console.log(pattern)
}


// 🟢 Level 2: Triangle Patterns
// *
// **
// ***
// ****

for(let i=0;i<=3;i++){
    let pattern="";

    for(let j=0;j<=i;j++){
        pattern+="*"
    }
    console.log(pattern)
}

//putha triangle 
// ****
// ***
// **
// *

for(let i=3;i>=0;i--){
    let pattern="";

    for(let j=i;j>=0;j--){
        pattern+="&"
    }
    console.log(pattern)
}

// 🟢 Level 3: Number Patterns
// 1
// 12
// 123
// 1234

for(let i=1;i<=4;i++){
    let pattern="";

    for(let j=1;j<=i;j++){
        pattern+=j
    }
    console.log(pattern)
}

// 1
// 22
// 333
// 4444

for(let i=0;i<=3;i++){
    let pattern="";

    for(let j=0;j<=i;j++){
        pattern+=i;
    }
    console.log(pattern)
}


// 🟢 Level 4: Alphabet Patterns
// this is same as number bass ek hceez addd nudi si that formula sting
//a 
//ab
//abc
//abcd

for(let i=0;i<=3;i++){
    let pattern="";

    for(let j=0;j<=i;j++){
        pattern+=String.fromCharCode(65+j)
    }
    console.log(pattern)
}

// isme coloums change ho raheg hai abd agar 

//agar siraf row same rakhio hai like 
//a 
//bb 

// toh bass 65+i akr debna


// 🟢 Level 5: Space Patterns ⭐
//    *
//   **
//  ***
// ****

for(let i=0;i<=3;i++){
    //outer loop dekhke ke liye
    let pattern=""

    //space ki loop
    for(let j=0;j<=4-i;j++){
        pattern+=" "
    }

    for(let j=0;j<=i;j++){
        pattern+="*"
    }
    console.log(pattern)
}

// 🟢 Level 6: Pyramid
//    *
//   ***
//  *****
// *******

 for(let i=1;i<=4;i++){
    let pyramid="";

    for(let j=4-i;j>0;j--){
        pyramid+=" "
    }

    for(let j=1;j<=2*i-1;j++){
        pyramid+="&"
    }
    console.log(pyramid)
 }


//  *******
//  *****
//   ***
//    *

for(let i=4;i>0;i--){
    let reversepyramind="";

    //spaces da scene hai
    for(let j=0;j<=4-i;j++){
        reversepyramind+=" "
    }

    for(let j=0;j<2*i-1;j++){
        reversepyramind+="*"
    }
    console.log(reversepyramind)
}


// 🟢 Level 8: Diamond
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *


let n=6;
 for(let i=1;i<=n;i++){
    let pyramid="";

    for(let j=n-i;j>0;j--){
        pyramid+=" "
    }

    for(let j=1;j<=2*i-1;j++){
        pyramid+="&"
    }
    console.log(pyramid)
 }

for(let i=n-1;i>0;i--){
    let reversepyramind="";

    //spaces da scene hai
    for(let j=0;j<n-i;j++){
        reversepyramind+=" "
    }

    for(let j=0;j<2*i-1;j++){
        reversepyramind+="*"
    }
    console.log(reversepyramind)
}


// Level 5: Hollow (4)
// ****
// *  *
// *  *
// ****

// main cheez jo mai sikhi ede andar ke tuc appni row and col di position nu fixed krdo basss

// n decide kro ism
let g=5;
for(let i=0;i<=g;i++){
    let hollow="";

    for(let j=0;j<=g;j++){
        if(i==0 || i==5 || j==0 || j==5){
            hollow+="*"
        }else{
            hollow+=" "
        }
    }
    console.log(hollow)
}

//    *
//   * *
//  *   *
// *******

let p=5;

for(let i=0;i<=p;i++){
    let pattern="";

    for(let j=p-i;j>=0;j--){
        pattern+=" "
    }

    for(let j=0;j<2*i-1;j++){
        if(j==0 || j==2*i){
            pattern+="*"
        }else{
            pattern+=" "
        }
    }
    console.log(pattern)
}