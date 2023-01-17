let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    nullable: null,
    undefinable: undefined,
    bigInt: BigInt(512146314)
}

//Object Properties

//Dot NOTATİON
const firstName = person.firstName;
console.log(firstName);

//LİST NOTATİON
const lastName = person["lastName"];
console.log(lastName);

const key = "age";
const age = person[key];

console.log(age);

console.log("Name:", person.firstName);
console.log("Surname:", person["lastName"]);
console.log("Age:", person[key]);