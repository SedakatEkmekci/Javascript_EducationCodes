//Aşağıda kullanılan tüm tırnak çeşitlerinde js string olarak algılar.
let text1 = "John Doe";
let text2 = 'John Doe';
let text3 = `John Doe`;

console.log(text1, text2, text3);

//QUOTES

/*Çift tırnağın içine başka bir çift tırnak koymak istediğimizde önüne 
"\" koymamız gerekir yoksa Js hata verir. */

let text4 = "It's John's Car called \"Memo\"";
let text5 = 'It\'s\ John\'s\ car called "Memo"';
let text6 = `It's John's car called "Memo"`;
console.log(text4);
console.log(text5);
console.log(text6);

//LENGTH -stringin uzunluğunu bize verir.

let text7 = "ABCDFGHIJKLMNOPRSTUVYZ";

let length = text7.length;
console.log(length);

//Strings as objects

let text8 = "John";
let text9 = new String("John");

console.log("Normal String:", text8);
console.log("Normal Index Character:", text8[0]);
console.log("String as Object:", text9);
console.log("Index character:", text9[0]);