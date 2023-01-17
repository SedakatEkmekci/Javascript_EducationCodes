//IndexOf - içerisinde aramak istediğiniz bir texti çalıştırıp indexini dönüyor

let str1 = "Search in the string";

let index1 = str1.indexOf("the");

let index2 = str1.indexOf("the", 12);

console.log("Ful text:", str1);
console.log("The Index:", index1);
console.log("The Index after 12 char:", index2);
console.log(" ");

//LastIndexOf - aramaya sağ taraftan başlar.

let str2 = "Search in the string";

let index3 = str2.lastIndexOf("in");

let index4 = str2.lastIndexOf("the", 12);

console.log("Ful text:", str2);
console.log("The Index:", index3);
console.log("Skip 12 chars from reverse, Index:", index4);
console.log(" ");

//Search 

let str3 = "Search in the string";
let found1 = str3.search("the");

console.log("Full Text:", str3);
console.log("Found Position:", found1);
console.log(" ");

//Match - string içerisinde bulunan search ile bulunmuş textleri tek bir aray içinde toplar.Regex yapısı kullanır.

let str4 = "Test string for matching Regex format";
let matched1 = str4.match(/t/ig);

console.log("Matched Array:", matched1);
console.log(" ");

//Includes - position numarası yerine true ya da false döner

let str5 = "Hello world, welcome to universe";
let includes1 = str5.includes("world");

console.log("Full Text:", str5);
console.log("is includes:", includes1);
console.log(" ");

//Startswith- Bir string belli bir string formatıyla başlıyorsa starswith kullanırız.

let str6 = "Hi, StartUp Academy";
let startsWith1 = str6.startsWith("Hi");
let starsWith2 = str6.startsWith("Hi", 6);

console.log("Full Text:", str6);
console.log("is started with:", startsWith1);
console.log("is started with after 6 char skipped:", starsWith2);
console.log(" ");

//Endswith- Sondan saymaya başlar.

let str7 = "Hi, StartUp Academy";
let endsWith1 = str7.endsWith("Hi");
let endsWith2 = str7.endsWith("Hi", 15);

console.log("Full Text:", str7);
console.log("is ends with:", endsWith1);
console.log("is ends with after 6 char skipped:", endsWith2);
console.log(" ");