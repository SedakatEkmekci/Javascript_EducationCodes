//SLİCE - stringleri kesmemize olanak sağlar.
let str1 = "Apple,Banana,Kiwi";
let part1 = str1.slice(6, 12); //7 ile 13 arasını keser.

console.log("Default Value:", str1);
console.log("Sliced Value:", part1);

let str2 = "Apple, Banana, Kiwi";
let part2 = str2.slice(-12, -6); //her şeyi ters düşünüp sayıyoruz.

console.log("Default Value:", str2);
console.log("Sliced Value:", part2);

//SUBSTRİNG - slice'a çok benzer ama negatif değerleri almaz.

let str3 = "Apple, Banana, Kiwi";
let part3 = str3.substring(7, 13);
let part4 = str.substring(-6, -12);

console.log("Default Value:", str3);
console.log("Substring Value:", part3);
console.log("Substring Value:", part4); //substring negatif değerleri almaz.

//SUBSTR 

let str4 = "Apple, Banana, Kiwi";
let part5 = str4.substr(7, 6); //7. karakterden itibaren 6 karakter keser.

console.log("Default Value:", str4);
console.log("Substr Value:", part5);