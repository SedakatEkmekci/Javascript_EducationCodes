//DEFAULT FUNCTİON DEFINITION
/*function isTrue(param) {
    const bool = param === null || param === undefined || param === "";
    return !bool;
}

console.log("null:", isTrue(null));
console.log("umdefined:", isTrue(undefined));
console.log("empty string:", isTrue(""));
console.log("Test:", isTrue("Test"));
*/

//INLINE FUNCTION DEFİNİTİON
/*
const isTrue = function(param) {
    const bool = param === null || param === undefined || param === "";
    return !bool;
}
console.log("null:", isTrue(null));
console.log("umdefined:", isTrue(undefined));
console.log("empty string:", isTrue(""));
console.log("Test:", isTrue("Test"));*/

//ARROW FUNCTİON DEFİNİTİON
/*
const isTrue = (param) => {
    const bool = param === null || param === undefined || param === "";
    return !bool;
}
console.log("null:", isTrue(null));
console.log("umdefined:", isTrue(undefined));
console.log("empty string:", isTrue(""));
console.log("Test:", isTrue("Test"));*/

//SELF-INVOKING FUNCTİON

const bool = (function(param) {
    const bool = param === null || param === undefined || param === "";
    return !bool;
})("Test")

console.log("Test: ", bool);