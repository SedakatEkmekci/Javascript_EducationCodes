//toString Method- bir nuarayı bir stringe çevirmek için kullanılır.

let num1 = 120;
let str1 = num1.toString();

console.log("Value:", num1);
console.log("String value:", str1);

//toexponantial-sayıları exponansiyel halde yazmaya yarıyan metottur.

let num2 = 95311548512;
console.log("Value:", num2);

let num3 = num2.toExponential(2);
console.log("Exponantial of fragment 2:", num3);

let num4 = num2.toExponential(3);
console.log("Exponantial of fragment 3:", num4);

let num5 = num2.toExponential(4);
console.log("Exponantial of fragment 4:", num5);

let num6 = num2.toExponential(6);
console.log("Exponantial of fragment 6:", num6);

//tofix - ondalıklı sayıyı tek bir sayıya yuvarlar.

let num7 = 96.273283723;
console.log("Value:", num7);

let num8 = num7.toFixed(0);
console.log("Fixed 0 value:", num8);

let num9 = num7.toFixed(3);
console.log("Fixed 3 value:", num9);

//toprecision -- tofixden farklı olarak sayının yetmediği basamaklara kendi değer veriri.

let num10 = 95.5;
console.log("value:", num10);

let num11 = num10.toPrecision();
console.log("Precision auto value:", num11);

let num12 = num10.toPrecision(4);
console.log("Precision auto value:", num12);

//Valueof - Bir sayının object üzerinden değerini okuyabiliriz.

let num13 = new Number(9600000.5);
console.log("Value:", num13);

let num14 = num13.valueOf();
console.log("Value of number object:", num14);

//ParseInt -- ondalıklı veya herhangi bir sayıdan asıl sayı kısmını alan bir metot

let num15 = "654.32976743";
console.log("Value:", num15);

let num16 = parseInt(num15);
console.log("Parsed integer value:", num16);

//Parsefloat -- parseınt gibi çalışır ama ondalıklı kısmı da verir.

let num17 = "-15.9773729";
console.log("Value:", num17);

let num18 = parseFloat(num17);
console.log("Parsed float value:", num18);

let num19 = "10.7498348934";
console.log("Value:", num19);

let num20 = parseFloat(num19);
console.log("Parsed float value:", num20);