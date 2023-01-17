let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    nullable: null,
    undefinable: undefined,
    bigInt: BigInt(742389423),
    fullName: function() {
        return this.firstName + " " + this.lastName
    },
    ageLogger: () => {
        console.log("Age of John Doe:", this.age);
        //this notationı arrow functionda erişilemez


    }
}

const fullName = person.fullName();

console.log("Full name:", fullName);

person.ageLogger();