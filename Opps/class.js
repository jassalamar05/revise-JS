// 1. Student Example 🎓

//without constructor
class Stud{}

let s1=new Stud();
s1.name="Amar";
s1.age=21;

let s2=new Stud();
s2.name="Rahul";
s2.age=32;

console.log(s1,s2)

//With constructor
class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
let d1=new Student("amar",12)
console.log(d1)


//Student Class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    display(){
        console.log(`name:${this.name}`)
        console.log(`Age: ${this.age}`)
    }
}

let r1=new Person("amar",21)
r1.display()


//Bank ACOOUNT:

class BA{
    constructor(name,bal){
        this.name=name;
        this.bal=bal
    }

    deposit(amount){
        this.bal+=amount
    }

    withdraw(amount){
        this.bal-=amount
    }

    showBal(){
        console.log(this.bal)
    }
}

let user=new BA("amar",1000)

user.deposit(4000)
user.withdraw(3000)
user.showBal()

// 4. Rectangle Area
class Rec{
    constructor(l,w){
        this.l=l;
        this.w=w;
    }

    area(){
        console.log(`area is ${this.l*this.w}`)
    }
}
let o=new Rec(12,2)
o.area()


// Inheritance
class Animal{
    eat(){
        console.log("eating ...")
    }
}

class Dog extends Animal{
    bark(){
        console.log("Barking....")
    }
}

let d=new Dog()
d.bark()
d.eat()

// . Method Overriding (Polymorphism)

class Animals{
    sound(){
        console.log('animal Sound')
    }
}
class Dogs extends Animals{
    sound(){
        console.log("BARK")
    }
}

let t=new Dogs()
t.sound()


// 8. Getter & Setter (Encapsulation)
class Stuf{
    constructor(name){
        this._name=name
    }

    get name(){
        return this._name
    }

    set name(value){
        this._name=value;
    }
}

let j=new Stuf("amar")

console.log(j)

j._name="rahul";

console.log(j._name)


//Static method
class MathOperation{
    static add(a,b){
        return a+b
    }
}
console.log(MathOperation.add(3,3))


// 0. Complete OOP Example ⭐⭐⭐⭐⭐
class Har{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        console.log(`hi i am ${this.name}`)
    }
}

class Sf extends Har{
    constructor(name,age,course){
        super(name,age);
        this.course=course;
    }

    study(){
        console.log(`${this.name} is studying ${this.course}`)
    }
}

let k1=new Sf("aamr",11,"bsc")
k1.introduce()
k1.study()






// 🟢 Group 1: Class & Object (Basic)
// Student Details
class S{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    studentDetails(){
        console.log(`${this.name} ,  ${this.age}`)
    }
}
const g=new S("amardeep",32)
g.studentDetails()
// Car Details
// Mobile Details
// Book Details
// Employee Details

//je bhi same hai 
// Concept: Class, Object, Object Creation




// 🟡 Group 2: Constructor
// Student Constructor
// Car Constructor
class Car{
    constructor(money){
        this.money=money
    }
}
const h1=new Car(12)
console.log(h1)

// Product Constructor
// Bank Account Constructor
// Movie Constructor

// Concept: Constructor, this, new






// 🟠 Group 3: Methods
// Student → display()
// Rectangle → area()
// Bank → deposit(), withdraw()
// Calculator → add(), sub(), mul(), div()
class Cal{
    constructor(n1,n2){
        this.n1=n1;
        this.n2=n2
    }

    add(){
        console.log(`Add numbers ${this.n1+this.n2}`)
        }
    
    sub(){
        console.log(`Sub ${this.n1-this.n2}`)
    }

    mul(){
        console.log(`This mul ${this.n1*this.n2}`)
    }

    div(){
        console.log(`divide ${this.n1/this.n2}`)
    }
}
const l=new Cal(20,5)
l.add()
l.div()
l.mul()
l.sub()

// Shopping Cart → addItem(), removeItem()

// Concept: Instance Methods





// 🟣 Group 5: Inheritance
// Animal → Dog
class Animalo{
    constructor(name){
        this.name=name
    }

    bark(){
        console.log(`name ${this.name}`)
    }
}

class Dogi extends Animalo{
    constructor(name,sound){
        super(name)
        this.sound=sound
    }

    barking(){
        console.log(`this is ${this.name} && ${this.sound}`)
    }
}

const n=new Dogi("dogo","haahah")
n.barking()
// Vehicle → Car

// hardest example 
class pot{
    constructor(brand){
        this.brand=brand;
    }

    start(){
        console.log(`this ${this.brand} vehicle started`)
    }
}

class ham extends pot{
    constructor(brand,model){
        super(brand)

        this.model=model
    }

    start(){
        console.log("Checking fuel ....")
        super.start();   // vehicle start
        console.log(`${this.model}`)
    }
}

class Electric extends ham{
    constructor(brand,model,battery){
        super(brand,model)
        this.battery=battery;
    }

    start(){
        console.log("Checking battery ....")
        super.start();
        console.log(`Battery level ${this.battery}`)
    }
}

const tesla=new Electric("tesla","model",90)
tesla.start()
// Person → Student
// Employee → Manager
// Shape → Rectangle

// Concept: extends





// 9 Getter Setter
class BankAccount{
    #balance;

    constructor(name,balance){
        this.#balance=na
    }
}





// 🟢 Group 1: Class & Object
// 1. Student Class
// Question:
// Ek Student class banao.
// Properties:
// name
// age
// course
// marks

// Methods:

// introduce() → Name aur course print kare.
// isPassed() → Agar marks >= 40 hain to "Passed" warna "Failed".

class Stud2{
    constructor(name,age,course,marks){
        this.name=name;
        this.age=age;
        this.course=course;
        this.marks=marks
    }

    introduce(){
        console.log(`name : ${this.name}  &&  course : ${this.course}`)
    }

    isPassed(){
        if(this.marks>=40){
            return "passed"
        }else{
          return "failed"
        }
    }
}

const i=new Stud2("amardeep",21,"sciene",70)
i.introduce()
console.log(i.isPassed())
  
// 2. Car Class
// Question:

// Properties:
// brand
// model
// year
// speed

// Methods:
// accelerate() → Speed +20
// brake() → Speed -10
// showSpeed()


class Casr{
    constructor(brand,model,year,speed){
        this.brand=brand;
        this.model=model;
        this.year=year;
        this.speed=speed
    }

    carDetails(){
        console.log(`brand : ${this.brand}  &&  year : ${this.year} model : ${this.model}`)
    }

    Accel(){
        console.log(this.speed+=20)
    }

    Brake(){
        console.log(this.speed-=10)
    }

    showSpeed(){
        console.log(this.speed)
    }

}

const lk=new Casr("Bmw","DOC",2023,40)
lk.Accel()
lk.showSpeed()

lk.Brake()
lk.showSpeed()
  

// 3. Mobile Class
// Questio:
// Properties:

// company
// model
// battery
// storage

// Methods:

// charge() → Battery 100%
// usePhone(hours) → Battery kam kare
// phoneInfo()\

class Mobile{
    constructor(company, battery){
        this.company=company;
        this.battery=battery;
    }

    charge(){
        console.log(`battery :${this.battery}`)
    }

   usePhnone(hours) {
    if (hours >= 22) {
        this.battery = Math.max(0, this.battery - 80);
    } else if (hours >= 16) {
        this.battery = Math.max(0, this.battery - 60);
    } else if (hours >= 10) {
        this.battery = Math.max(0, this.battery - 40);
    } else if (hours >= 5) {
        this.battery = Math.max(0, this.battery - 20);
    } else {
        this.battery = 0;
    }
}
    phoneinfo(){
        console.log(`${this.company} ,, ${this.battery} `)
    }
}

const jo=new Mobile("samsung",100)
jo.phoneinfo()

jo.usePhnone(9)
jo.phoneinfo()


jo.usePhnone(18)
jo.phoneinfo()
// 4. Book Class

// Properties:
// title
// author
// price
// stock

// Methods:
// buyBook(quantity)
// restock(quantity)
// bookInfo()





// 5. Employee Class
// Properties:
// name
// salary
// designation

// Methods:
// increment(amount)
// showSalary()

class Emp{
    constructor(name,postion,salary){
        this.name=name;
        this.postion=postion;
        this.salary=salary;
    }

    increment(amount){
        if(this.postion === "M"){
            amount+=this.salary
        }else if (this.postion === "E"){
            amount+=this.salary;
        }else if (this.postion === "SG"){
            amount+=this.salary;
        }
    }

    showSalary(){
        console.log(this.salary , this.name , this.postion)
    }
}

const man=new Emp("Amar","M",200000)
man.increment(60000)
man.showSalary()