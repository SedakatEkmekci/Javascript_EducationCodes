function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

Person.prototype.nationality = "Türkiye";

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

const person = new Person("Seda", "Ekmekçi", 23);
console.log(person.firstName, person.lastName, person.age, person.nationality);
console.log(person.fullName());