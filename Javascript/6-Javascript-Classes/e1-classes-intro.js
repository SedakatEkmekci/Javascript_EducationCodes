//DEFINITION OF CLASSES WITH PARAMETERS
/*
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

const person1 = new Person("Seda", "Ekmekçi");
const person2 = new Person("Ömer Faruk", "Güneş");

console.log(person1, person2);
*/

//We can use any method we want over the class.

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    logFirstName() {
        console.log("First name:", this.name);

    }
    logLastName() {
        console.log("Last Name:", this.surname);
    }
    logFullName() {
        console.log("Full Name:", this.name, this.surname);
    }
}

const person1 = new Person("Seda", "Ekmekçi");
const person2 = new Person("Ömer Faruk", "Güneş");

person1.logFirstName();
person1.logLastName();
person1.logFullName();

person2.logFirstName();
person2.logLastName();
person2.logFullName();