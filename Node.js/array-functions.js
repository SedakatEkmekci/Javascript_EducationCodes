const users = [{
    name: "Mehmet",
    age: 29
},
{
    name: "Mehmet",
    age: 10
},
{
    name: "Ahmet",
    age: 25

}, {
    name: "Murat",
    age: 30
},
{
    name: "Sevilay",
    age: 18
}
];

/*
Push
Map
Find
Filter
Some
Every
Includes
*/

/* Push --> Array'in sonuna yeni bir eleman ekler.
users.push('Ayşe');
users.push('Fatma');

console.log(users);
*/

//Map --> Array içinde tek tek döner.
/*for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

users.map((item) => {
    console.log(item.name);
})
*/

/* Find --> Array içerisinde verilen koşullarla arama işlemi yapar.

const result = users.find((item) => item.name === 'Mehmet' && item.age > 20); //bulduğu ilk kaydı ekrana getirir.
console.log(result);
*/

/*Filter --> Array içerisinde filtereleme yapar.

const filtered = users.filter((item) => item.name === 'Mehmet' && item.age < 20);
console.log(filtered);
*/

/*Some --> Array içindekilerden biri verdiğimiz koşula uyuyorsa true döner uymuyorsa false döner.

const some = users.some(item => item.age === 10);
console.log(some);

*/

/*Every --> Array'in bütün elemanlarının şarta uymasını bekler. Eğer uyuyorsa true uymuyorsa false döner. 

const every = users.every(item => item.age > 5);
console.log(every);
*/

/*Includes --> Girdiğimiz ifadenin Array içerisinde olup olmadığını kontrol eder.Varsa true yoksa false döner*/

const meyveler = ['elma', 'armut', 'muz'];

const isIncluded = meyveler.includes('muz');
console.log(isIncluded);