// program 1 this inside constructor

class S{
    constructor(name,age){
        this.name=name;
        this.age=age
    }   // this object ki properties ko initalize krta hai and objct create krta hai 
}

const a1=new S("amar",21)
console.log(a1)

//this indide methods;
//current object ka data access karne ke liye 

class G{
    constructor(name){
        this.name=name
    }

    greet(){
        console.log(`hello ${this.name}`)
    }
}

const f1=new G("aamr")
f1.greet()

// 🟢 Program 3: this vs Local Variable\\

class C{
    constructor(name){
        this.name=name
    }

    show(){
        let name="Amar";

        console.log(name)
        console.log(this.name)
    }
}

const m=new C("kl")
m.show()

// 🟢 Program 4: Multiple Objects ⭐⭐⭐⭐⭐

//Why?
// Same method different objects pe kaam karta hai.


class Student {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

const s1 = new Student("Amar");
const s2 = new Student("Rahul");

s1.greet();
s2.greet();



// 🟢 Program 5: Missing Property ⭐⭐⭐

class N{
    constructor(name){
        this.name=name;
    }

    show(){
        console.log(this.age)
    }
}
const g1=new N("asd")
g1.show()


// 🟢 Program 6: Losing this ⭐⭐⭐⭐⭐

// class Stunt {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(this.name);
//     }
// }

// const s = new Stunt("Amar");
// const fn = s.greet;
// fn();

// 👉 Function object se alag ho gaya.


// 🟢 Program 7: Fix Losing this using bind()

class M{
    constructor(name){
        this.name=name;
    }

    gret(){
        console.log(this.name);
    }
}

const l=new M("ds")

const gn=l.gret.bind(l);
gn()

//🟢 Program 9: Static Method ⭐⭐⭐⭐
class LK{
    static college="CT";

    static show(){
        console.log(this.college)
    }
}

LK.show()

//🟢 Program 10: Method Chaining ⭐⭐⭐⭐
class Counter{
    constructor(){
        this.count=0;
    }

    inc(){
        this.count++;
        return this;
    }

    dec(){
        this.count--;
        return this;
    }

    show(){
        console.log(this.count)
        return this;
    }
}

const p=new Counter();
p.inc()
p.dec()
p.show()