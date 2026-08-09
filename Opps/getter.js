class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Amar", "Singh");

// Har jagah logic likhna padega
console.log(user.firstName + " " + user.lastName);


// Problem

// Agar company bole:
// "Surname pehle dikhana hai."
// To har jagah ye change karna padega.

// console.log(user.lastName + " " + user.firstName);

// Agar project me 100 jagah likha hai, to 100 jagah change karni padegi. ❌


class Userss {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const userss = new Userss("Amar", "Singh");
console.log(user.fullName);


// Baad me requirement change hui
// Sirf getter badal diya.

// get fullName() {
//   return this.lastName + " " + this.firstName;
// }



// Lekin bahar ka code same raha.
// console.log(user.fullName);
// Output pehle:
// Amar Singh

// Output baad me
// Singh Amar