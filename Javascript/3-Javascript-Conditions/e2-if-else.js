const param1 = 16;
const param2 = 30;

if (param1 < param2) {
    console.log("Condition 1");
} else if (param1 === param2) {
    console.log("Condition 2");
} else if (param1 >= param2) {
    console.log("Condition 3");
} else {
    console.log("Condition 4");
}

const param3 = "Can";
const param4 = "Deniz";
let result = 0;
const can = 5;
const deniz = 10;

if (param3 === "Can") {
    result = can * 1;
    console.log("Can 1'de görüldü");
} else if (param3 === "Deniz") {
    result = deniz * 1;
    console.log("Deniz 1'de görüldü");
} else if (param4 === "Can") {
    result = can * 2;
    console.log("Can 2'de görüldü");
} else {
    console.log("Deniz 2'de görüldü");
}
console.log(result);