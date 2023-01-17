/* const ile assign edilmiş bir değere yeniden assign edilmez aşağıdaki yanlış bir kullanımdır.
const cars = [];
cars =["Saab","Volvo","BMW"];
*/

/*Const ile tanımlanmış bir arraye ya eleman push edebilirsiniz ya da indekslere tek tek ekleme yaparsınız.*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const arr = [];
//arr[0] = "Saab";
arr.push("Test");
arr.push("Test");
arr.push("Test");
console.log(arr);