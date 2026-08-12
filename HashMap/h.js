let nums=[10,20,30,40];

let map=new Map();

for(let i=0;i<nums.length;i++){
    map.set(nums[i] ,i)
}
console.log(map)


// question 1 :
let num=[1,2,3,4,5];    // step 1: here you called as the array DS hai appka 
//yeh appka ek hash map banayega 
let Maps=new Map();
// loop chli jo value and index ko set krdi ek map mei
for(let i=0;i<=num.length-1;i++){
        Maps.set(num[i],i)  // here you will set all the values with the index of it ;
}
console.log(Maps)

// STEP 1: check kro 4 exists ornot;
console.log(Maps.has(4))
console.log(Maps.has(12))


//  Question :
function Mp(nums){
    let k=new Map();

    for(let i=0;i<=nums.length-1;i++){
      k.set(nums[i],i)
    }
    console.log(k.has(2),"hnji")
    console.log(k.has(1))
    console.log(k.has(10))
}
(Mp([1,2,3,4,5]))


// check krde pye a ke 7 hega ke nai QUES 4:

function CHeck(n,target){
    let b=new Map();

    for(let i=0;i<=n.length-1;i++){
        b.set(n[i],i)
    }
    if(b.has(target)){
        return "found"
    }else{
        return "not"
    }
}
  console.log(CHeck([3,7,9,11],7))


// target =5 kitni barr hai question mei batao QUEST 6:
function T(lk,target){
    let p=new Map();
    let count=0;
   
    for(let i=0;i<lk.length-1;i++){
        if(lk[i] === target){
            count++
        }
    }
    return count;
}
console.log(T([2,1,2,6,6,6],2))


// ab sabbki freq
function frea(a){
    let freq={};

    for(let i=0;i<=a.length-1;i++){
        if(freq[a[i]]){
            freq[a[i]]++
        }else{
            freq[a[i]]=1
        }
    }
    return freq
}
console.log(frea([1,2,3,4,45,45,3,3,1,1]))