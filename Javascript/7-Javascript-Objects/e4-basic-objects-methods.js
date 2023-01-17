let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    nullable: null,
    undefinable: undefined,
    bigInt: BigInt(2380240)
};

//Object Keys
const keysArr = Object.keys(person);
console.log(keysArr);

//Object Values
const valuesArr = Object.values(person);
console.log(valuesArr);