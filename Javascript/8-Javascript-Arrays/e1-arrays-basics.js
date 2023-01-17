//Array description 1
let people1 = ["Seda", "John", "Mary"];
console.log(people1);

//Array description 2
let people2 = [];
people2[0] = "Seda";
people2[1] = "John";
people2[2] = "Mary";
console.log(people2);

//Array description 3
const people3 = new Array("Seda", "John", "Mary");
console.log(people3);

//Array dolu olsa bile indeks numaraları ile arraye müdahale edilebilir.
const people4 = ["Seda", "John", "Mary"];
people4[0] = "John";
console.log(people4);

//Arrayin temel özelliklerinden biri de LENGTH'dir.
const people5 = ["Seda", "John", "Mary", "Joe"];
console.log(people5);
const length1 = people5.length;
console.log("Length:", length1);

console.log("First element:", people5[0]);
console.log("Last element:", people5[people5.length - 1]);

//Arrayler üzerinde loop oluşturma

for (let i = 0; i < length1; i++) {
    console.log(people5[i]);
}