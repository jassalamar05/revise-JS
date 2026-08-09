//Instace methods::

class Student{
    constructor(name){
        this.name=name
    }

    introduce(){
        console.log(`Hi , I ${this.name}`)
    }
}
// clariutu ayi ke ham common method ko acccewss kar kar rega hei in multiple obejcts'
//mehtod space common hai || obejct appke new create honge and independent context mei save honge
const m2=new Student("amar")
m2.introduce()


// Statci methods:

// yeh kisi object par depend nai karta hai > 
//There are utility , helper functions 
// Isiliye obejct banan ke jaruarat nai jab ham directly class se acceess karte hai isko 

class Fish{
   static add(a,b){
    return a+b
   }
}

console.log(Fish.add(30,30))

// 🟢 3. Static Property

// this is the property of the class where you can direclt use it with the class name 
class G{
    static college="LPU";
}
console.log(G.college)


// agar 100 student bhi bann gye toih college sabka same hi rahega



//Mehtod caling

class Ds{
    start(){
        console.log("car is started")
    }
}

const k= new Ds()
k.start()


// Object
// ↓
// start()
// ↓
// Method Execute


//method chaining

class Cal{
    add(){
        console.log("add")
        return this
    }

    sub(){
        console.log("sub")
        return this;
    }

    mul(){
        console.log("mul")
        return this;
    }
}

const cal= new Cal()
cal.add()
cal.sub()
cal.mul()





// 🟢 Group 3: Methods
// 1. Calculator
// Methods:
class Cals {
    static add(a, b) {
        console.log(a + b);
    }

    static subtract(a, b) {
        console.log(a - b);
    }

    static multiply(a, b) {
        console.log(a * b);
    }

    static divide(a, b) {
        if (b === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(a / b);
        }
    }
}

Cals.add(10, 5);        // 15
Cals.subtract(10, 5);   // 5
Cals.multiply(10, 5);   // 50
Cals.divide(10, 5);     // 2
// 2. Temperature Converter

// Methods:

// Celsius → Fahrenheit
// Fahrenheit → Celsius



// 3. Shopping Cart
// Properties:
// items
// totalPrice
// Methods:
// addItem()
// removeItem()
// calculateTotal()


class Cart{
    
    static item=0;
    static totalprice=0

    static addItem(price){
        this.item++;
        this.totalprice+=price
    }

    static removeItem(price){
      if(this.item>0){
        this.item--;
        this.totalprice-=price
      }
    }

   static total(){
    console.log(this.item)
    console.log(this.totalprice)
   }
}


Cart.addItem(500);
Cart.addItem(300);
Cart.total();

Cart.removeItem(300);
Cart.total();
// 4. Counter

// Property:
// count
// Methods:
// increment()
// decrement()
// reset()

class Counter{
    static count=0;

    static Inc(){
        console.log(this.count++)
    }

    static Dec(){
        if(this.count>0){
           console.log(this.count--)
        }else{
            console.log("invalid")
        }
    }

    static rest(){
        console.log(this.count=0)
    }
}
Counter.Inc()
Counter.Inc()
Counter.Inc()


Counter.Dec()
Counter.Dec()
Counter.Dec()
Counter.rest()

// 5. Bank Account
// Methods:
// deposit()
// withdraw()
// checkBalance()