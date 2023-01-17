function multiply(p1, p2) {
    console.log("Multiplication started");
    const multiplied = p1 * p2;
    return multiplied;

}
console.log("Multiplication not started");

let result = multiply(10, 12);
console.log("Multiplication of 10 and 12:", result);

console.log("-------------------");

function fullNameGenerator(firstName, secondName) {
    return firstName + " " + secondName;
}

let text = "Hi, I am " + fullNameGenerator("Seda", "Ekmekçi");
console.log(text);