class Emp{
    cal(){
        console.log("cal")
    }
}

class Developer extends Emp{
    cal(){
        console.log("cal developer")
    }
}

class Manager extends Emp{
    cal(){
        console.log("cal manager")
    }
}

const emply=[
    new Developer(),
    new Manager()
]
//here your method is same but your bhehavior is different so this is called polymorphism
emply.forEach(emp=>emp.cal())


//////Program 2

class Payment {
    pay(amount) {
        console.log("Payment Done");
    }
}

class UPI extends Payment {
    pay(amount) {
        console.log(`UPI Payment ₹${amount}`);
    }
}

class CreditCard extends Payment {
    pay(amount) {
        console.log(`Credit Card Payment ₹${amount}`);
    }
}

class NetBanking extends Payment {
    pay(amount) {
        console.log(`Net Banking Payment ₹${amount}`);
    }
}

const payments = [
    new UPI(),
    new CreditCard(),
    new NetBanking()
];

payments.forEach(p => p.pay(5000));


//Dynamic Polymor[phism]

// it is achieved using mehtod overriding 

// Parent Class
//       ↓
// Child Class overrides method
//       ↓
// Parent reference points to Child object
//       ↓
// Method call
//       ↓
// Runtime decides which method to execute


class Animal {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog Barks");
    }
}

class Cat extends Animal {
    sound() {
        console.log("Cat Meows");
    }
}

let animal;

animal = new Dog();
animal.sound();

animal = new Cat();
animal.sound();


// animal variable ka type same hai.
// Kabhi Dog object hold karta hai.
// Kabhi Cat object hold karta hai.
// Kaunsa sound() chalega, ye runtime par decide hota hai.
// Isi ko Dynamic Polymorphism kehte hain.



// Dynamic Polymorphism ke liye 3 Conditions
// ✅ Inheritance honi chahiye.
// ✅ Method Overriding honi chahiye.
// ✅ Method selection runtime par hona chahiye.