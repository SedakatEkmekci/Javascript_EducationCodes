//IS EQUAL

const param1 = 12;
const param2 = 12;
const param3 = "12";
const param7 = 13;

console.log("Same Type:", param1 == param2); //true
console.log("Different Type:", param1 == param3); //true 
console.log("Different Value:", param1 == param7); //false

//IS EQUAL WİTH TYPE

const param4 = 15;
const param5 = 15;
const param6 = "15";
const param8 = 16;

console.log("Same Type:", param4 === param5); //true
console.log("Different Type:", param4 === param6); //false
console.log("Different Value:", param4 === param8); //false

//NOT EQUAL WİTH

const param9 = 12;
const param10 = 12;
const param11 = "12";
const param12 = 13;

console.log("Same Type:", param9 != param10); //false
console.log("Different Type:", param9 != param11); //false
console.log("Different Value:", param9 != param12); //true


//NOT EQUAL WİTH TYPE

const param13 = 15;
const param14 = 15;
const param15 = "15";
const param16 = 16;

console.log("Same Type:", param13 !== param14); //false
console.log("Different Type:", param13 !== param15); //true
console.log("Different Value:", param13 !== param16); //true

//LOGİCAL OPERATORS

const param17 = 15;
const param18 = 16;
const param19 = 17;

console.log(param17 < param18); //true
console.log(param18 > param17); //true
console.log(param17 <= param18); //true
console.log(param18 >= param17); //true

const bool1 = (param17 < param18) && (param18 > param17);
const bool2 = !(param17 < param18) && (param18 > param17);
const bool3 = !(param17 < param18) && !(param18 > param17);

console.log("Logical Operator AND:", bool1); //true
console.log("Logical Operator AND:", bool2); //false
console.log("Logical Operator AND:", bool2); //false

const bool4 = (param17 < param18) || (param18 > param17);
const bool5 = !(param17 < param18) || (param18 > param17);
const bool6 = !(param17 < param18) || !(param18 > param17);

console.log("Logical Operator OR:", bool4); //true
console.log("Logical Operator OR:", bool5); //true
console.log("Logical Operator OR:", bool6); //false

const bool7 = !(param17 < param18);
console.log("Not Operator:", bool7); //false

//TENARY IF

const age = 19;

let votable = (age < 18) ?
    false :
    age > 20 ?
    null :
    true;

console.log("Oy kullanabilir mi:", votable); //true