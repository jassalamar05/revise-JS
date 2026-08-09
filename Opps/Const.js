// 🟢 Group 2: Constructor
// 1. Student Constructor

// Constructor se initialize karo:

// name
// age
// marks

// Method:
// result()

class Person{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks
    }  //yeh siraf ek emplty obejct create kete ha
}
const o= new Person("amar",21,30000)
console.log(o.name, o.age , o.marks)
    
    
// 2. Product Constructor

// Properties:
// name
// price
// quantity

// Methods:
// totalPrice()
// 3. Laptop Constructor

// Properties:
// company
// ram
// processor
// price

// Method:
// showConfig()


// 4. Movie Constructor
// Properties:
// movieName
// rating
// duration
// Method:
// movieInfo()


// BAKI TOH SB SAME SE HI LAG RAHEG HAIKRNA HAI TOH KRLENA OJAY

// 5. Bank Constructor

// Properties:
// accountHolder
// balance
// Methods:

// deposit()
// withdraw()
// checkBalance()

class Bank{
    constructor(name,bal){
        this.name=name;
        this.bal=bal;
    }

    deposit(amount){
        console.log(this.bal+=amount)
    }

    widthdrawl(amount){
        console.log(this.bal-=amount)
    }

    checkBal(){
        console.log(this.name,this.bal)
    }
}

const jm=new Bank("YES BANK", 30000) 
jm.deposit(4000)
jm.checkBal()


jm.widthdrawl(4000)
jm.checkBal()





