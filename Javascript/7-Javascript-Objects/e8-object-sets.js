const letters1 = new Set(["a", "b", "c"]);
//console.log(letters1);

/* SET'lere eleman eklemek için add fonksiyonunu kullanırız. */

letters1.add("d"); //Set'e eleman eklemek için
letters1.add("e");
letters1.add("f");
letters1.add("d"); //yukarıda eklendiği için bir daha eklenmez

//console.log(letters1);

/* Setlerin arraylerden temel farkı Setler içerisine arraydeki elemanlardan
ziyade unıque elemanlar alır. */
/* Aynı ya da tekrar eden elemanları setin içerisine verdiğimiz zaman tekrar 
eden elemanlar set içerisinden otomatik olarak silinir */

//Values Method ---> Set içindeki değerlere erişir

const valuesArr = letters1.values();
console.log(valuesArr);

//Keys Method ---> Set içindeki değerlere erişir

const keysArr = letters1.keys();
console.log(keysArr);

/* Keys methodunda da values methodunda da SetIterator değerine ulaşır ve aynı sonucu döndürür */

//Type & InstanceOf

console.log(typeof letters1); //letters1'in typeını yazdırır
console.log(letters1 instanceof Set); //buradaki değişkenin instance yani this kısmı set'e mi eşit ya da değil mi bunu yazdırır.
console.log(letters1 instanceof Number); //false değerine gelir.