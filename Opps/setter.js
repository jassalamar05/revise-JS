//without setter
class User{
    constructor(age){
        this.age=age
    }
}
const k=new User(20)
k.age=-10;

console.log(k.age)

//obejct is invalid in anture,

//with setter
class D{
    constructor(ages){
        this.ages=ages;
    }

    //setter aya

    set ages(value){
        if(value < 0){
            console.log("age limit")
            return;
        }
         this._ages=value
    }

    get ages(){
        return this._ages;
    }
}
const j=new D(12)
j.ages=-10;
console.log(j.ages)