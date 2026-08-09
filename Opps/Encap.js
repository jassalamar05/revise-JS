class Person{
    constructor(name){
        this.name=name;
    }                 
}

const p= new Person("amarr")
console.log(p.name)        
//se you can cahnge diraectly here  

p.name="harsh"
console.log(p.name)




// Program 2 : Namming Convention 

class Person2{
    constructor(name){
        this._name=name;
    } 
}

const p2= new Person2("amarr")
console.log(p2._name)

// yeh bhi possibel hai isme kyo ki yeh siraf developer ko sign dene ke liye hota hai ke odnot use it direcly
p2._name="harsh"
console.log(p2._name);

// 👉 _ sirf developer ko signal deta hai:
// "Please isse direct access mat karo."
// JavaScript ise private nahi banati.



// Program 3: Cloiusres

function Person3(name){
    let _name=name;

    return{
        getNAME(){
            return _name;
        },

        setNAME(newName){
            _name=newName;
        }
    }
}


const p3= Person3("amarr")
console.log(p3.getNAME())

p3.setNAME("harsh")
console.log(p3.getNAME())


// isme name abb bhar se acesbble nai ho sajta

p3._name="hello";
console.log(p3._name)



// Lexical Environment (Private)

// _name = "Amar"
//        ▲
//        │
// getName()   setName()
//        ▲
//        │
// Object p




//program 5 ::

//# reaal data hiding 

class Person5{
    #name;  // data hiding private property
    constructor(name){
        this.#name=name;
    }

    showName(){
        console.log(this.#name)
    }
}

let m= new Person5("amar")
m.showName()

// console.log(m.#name) 
 // yeh error dega kyo ki yeh private property hai



//getter ::
class Person6{
    #name;
    constructor(name){
        this.#name=name;
    }

    get name(){
        return this.#name;
    }
}

const m2= new Person6("amar")
console.log(m2.name)  // getter ke through access kar sakte hai


//read -> accesss -> rturn



//prgram 7: Swetter : Controller UPDATE 

class Stuf{
    #name;
    constructor(name){
        this.#name=name;
    }   

    set name(value){
        this.#name=value;
    }

    get name(){
        return this.#name;
    }
}

const b=new Stuf("amar")
b.name="harsh";

console.log(b.name)


// update -> set -> update -> get -> return



// REAL LIFE EXAMPLE

class Bank{
    #balance;
    #pin;

    constructor(accountType, balance, pin,name){

        //private member
        this.#balance=balance;
         this.#pin=pin;

        // normal member 
        this._accountType=accountType;
       // public member
        this.name=name
    }  

    // deposot baanya 
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        }
    }

    //widthdeawl 
    widthdrawl(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
        }
    }

    transfer(amount) {
    if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Transferred ₹${amount}`);
        console.log(`Remaining Balance: ₹${this.#balance}`);
    } else {
        console.log("Transfer Failed");
    }
}

    // show detauls
    showDetails(){
        console.log(`Account Holder: ${this.name}`);
        console.log(`Account Type: ${this._accountType}`);
        ;
    }

    // onlyu read access to balance
    get balance(){
        console.log(`Current balance: ${this.#balance}`);
    }

    // only update access to pin
    set pin(newPin){
        if(newPin.length===4){
            this.#pin=newPin;
            console.log("PIN updated successfully.",`new pin is ${this.#pin}`);
        }
    }
}

const v=new Bank("Savings", 1000, "1234","amar")
v.deposit(500)
v.widthdrawl(300)
v.transfer(200)
v.showDetails()
v.balance;
v.pin="4545" 