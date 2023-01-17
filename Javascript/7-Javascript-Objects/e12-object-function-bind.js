/* Apply ve Call'dan farkı bir metot dönüyor olması */
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Hilsen"
}
const fullNameOriginal = person.fullName();
console.log("Full Name Original:", fullNameOriginal);

const fullName = person.fullName.bind(member);
console.log("Member bindedn fullname:", fullName());

const fullNameOriginalWithBind = person.fullName.bind(person);
console.log("Person binded fullname:", fullNameOriginalWithBind());