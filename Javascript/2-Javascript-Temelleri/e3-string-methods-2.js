//REPLACE METHOD - bir string içerisindeki bir değeri başka bir değerle değiştirmemize yardımcı olur.

let str1 = "Test, Startup Academy";
console.log("Normal Value:", str1);

let newStr1 = str1.replace("Test", "Hi");
console.log("Replace Value:", newStr1);

/*Replace metotu üzerinde sadece 1 kez değiştirme yapılabilir. */

//REPLACE REGEX
let str2 = "Test, Startup Academy , Test Successful";
console.log("Normal Value:", str2);

let newStr2 = str2.replace(/Test/ig, "Hi"); //regex için // içerisine değiştirmek istediğimiz sözcüğü yazarız.
console.log("Replace Value:", newStr2);

//TOUPPERCASE - tüm harfleri büyük harflerle değiştirmek.

let str3 = "Hello World!";
console.log("Normal Text:", str3);

let uppercase = str3.toUpperCase();
console.log("Uppercased Text:", uppercase);

//CONCAT - İki stringi birleştirme metotu

let str4 = "Hello";
console.log("First Part:", str4);

let str5 = "World";
console.log("Last Part:", str5);

let concatedStr = str4.concat(" ", str5);
console.log("Concated Str:", concatedStr);

let concatedStrWithOperator = str4 + " " + str5;
console.log("Concated Str With Operator:", concatedStrWithOperator);

//TRIM - string içerisinde bulunan baştaki ve sondaki boşlukları temizler.
let str6 = "   Hello    World     ";
console.log("Str Value:", str6);

let trimmed = str6.trim();
console.log("Trimmed Str Value:", trimmed);

//PADS

//PADSTART- bir textin başına ve sonuna boşluk veya özel karakter ekler bunu da biz belirleriz.

let str7 = "5";
console.log("Normal String:", str7);

let padded1 = str7.padStart(8, "x"); //istediğimiz kombinasyonu girebiliriz.
console.log("Padded String:", padded1);

//PANEND - Başına değil sonun eklenir.
let str8 = "5";
console.log("Normal String:", str8);

let padded2 = str7.padEnd(8, "x"); //istediğimiz kombinasyonu girebiliriz.
console.log("Padded String:", padded2);