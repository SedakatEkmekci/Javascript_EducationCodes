let num1 = 5;
let num2 = NaN;

console.log("value:", num1);
console.log("Type of num1:", typeof num1);

console.log(" ");

console.log("value:", num2);
console.log("Type of num1:", typeof num2);

console.log(" ");

let num3 = Infinity;
console.log("Value:", num3);
console.log("Type of num3:", typeof num3);

console.log(" ");

let num4 = -Infinity;
console.log("Value:", num4);
console.log("Type of num4:", typeof num4);

console.log(" ");

//Number as Object 

let num5 = new Number(12);
console.log("Value:", num5);
console.log("Type of num5:", typeof num5);

console.log(" ");

let num6 = new Number(-10);
console.log("Value:", num6);
console.log("Type of num6:", typeof num6);

console.log(" ");

let num7 = new Number(Infinity);
console.log("Value:", num7);
console.log("Type of num7:", typeof num7);

console.log(" ");

let num8 = new Number(-Infinity);
console.log("Value:", num8);
console.log("Type of num8:", typeof num8);

console.log(" ");

let num9 = new Number(NaN);
console.log("Value:", num9);
console.log("Type of num9:", typeof num9);

console.log(" ");

let num10 = new Number(2 / 1);
console.log("Value:", num10);
console.log("Type of num10:", typeof num10);

console.log(" ");

let num11 = new Number(2 / 0);
console.log("Value:", num11);
console.log("Type of num11:", typeof num11);