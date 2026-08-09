//BASIC PROGRAM :::

class Animal{
    constructor(name){
        if(this.constructor===Animal){
            throw new Error("Abstract class cannot be instantiated")
        }
        this.name=name
    }

    sound(){
        throw new Error("Abstract method must be implemented")
    }
}

class Dog extends Animal{
    sound(){
        console.log( `name ${this.name}`,"BARK")
    }
}

const n=new Dog("diogo")
n.sound()



//INtermediate Program :::
class Shape{
    constructor(){
        if(new.target===Shape){
            throw new Error("shape is abstracted")
        }
    }

    area(){
        throw new Error("implemet  area()")
    }
}


class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
    }

    area(){
        return 3.14*this.radius*this.radius
    }
}


class Rectangle extends Shape{
    constructor(length,width){
        super()
        this.length=length;
        this.width=width;
    }

    area(){
        return this.length*this.width
    }
}

const c1=new Circle(8);
console.log(c1.area())



//ADVANCED TOPIC OF THIS 

class Payment{

    constructor(){

        if(new.target===Payment){
            throw new Error("Payment is Abstract");
        }

    }

    pay(amount){
        throw new Error("pay() must be implemented");
    }

}


class CreditCard extends Payment{

    pay(amount){
        console.log(`Paid ₹${amount} using Credit Card`);
    }

}


class UPI extends Payment{

    pay(amount){
        console.log(`Paid ₹${amount} using UPI`);
    }

}


class NetBanking extends Payment{

    pay(amount){
        console.log(`Paid ₹${amount} using Net Banking`);
    }

}


const p1=new CreditCard();
p1.pay(5000);

const p2=new UPI();
p2.pay(2000);

const p3=new NetBanking();
p3.pay(8000);


//agar assi child clas mei methiod implement na kare 
class Snake{
    constructor(){
        if(new.target === Snake){
            throw new Error("abstrct classs")
        }
    }

    sound(){
        throw new Error("implemented sound()")
    }
}

class Df extends Snake{}  // class mei na pass kre toh woh error dega usme 

// cionstructor is not mandatory in this ke ham dena chahe toh de bhi sakte hai aahae na dena chahae toh koi  batt ani kr ahi 



// agar child mei constrcutrr use kar rahe ho and parent mei bhi const hai toh super likhna mandatory hai nai toh woh chalgea hi nai okay 

// diractly parent abstract ko call kroge toh error dega woh nai .


//ABSTRCT + STATUC METHJOFD

class Sh{
    constructor(){
        if(new.target === Sh){
            throw new Error();
        }
    }

    static info(){
        console.log("abstract shape")
    }
}

Sh.info()


// 10. Abstract class + Getter ⭐⭐⭐⭐
class Person{
    constructor(){
        if(new.target===Person){
            throw new Error();
        }
    }
    // getter baanya hamne toh chal hi padega na fir
    get details(){
        throw new Error("Implement Getter");
    }
}
class Student extends Person{

    //getter nu call kar leya toh chalna hi si isme kya new batt hai .
    get details(){
        return "Amar";
    }
}

console.log(new Student().details);