//Eğer böyle yazarsak kendi kendine \n varmış gibi yazar.Ama bu sadece `tırnakta geçerli.

let str1 = `
Hi,
StartUp 
Acdemy`;

console.log("Multiline Text:", str1);
console.log(" ");

let name = "Startup",
    surname = "Academy";

let str2 = `Hello, ${name} ${surname}`;

console.log("Interpolated Backticks:", str2);

let price = 10;
let units = 50;

let str3 = `Total: ${units * price}`;

console.log(str3);