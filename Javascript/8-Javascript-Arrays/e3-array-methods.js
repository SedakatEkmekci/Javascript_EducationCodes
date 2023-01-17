/*concat --> iki arrayi birleştirir ve birleştirilmiş arrayleri bir değişken ya da değer olarak döner.*/

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emilie", "Tobias", "Linus"];

const children = arr1.concat(arr2);
console.log("Concat Method:", children);

/*Entries --> Arrayin elemanlarını entry ve value olarak ikiye bölüp bir arrayin içerisine sıkıştırıyoruz.
Tersine bir map işlemi yapmış oluyoruz. */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log("Entries:", ...f);

/* Every -->Bir arayyin elemanınlarını kontrol eder.
Bütün elemanları üzerinden geçen bir loop olarak düşünebiliriz. 
Bütün elemanların bir koşulu sağlayıp sağlamadığını bize raporlar.
Eğer bütün elemanları koşulu sağlıyorsa true döner bir tane bile sağlamıyorsa false döner. */

const ages = [32, 33, 16, 40];

function checkAge(age, index) {
    return age > 18;
}
const bool = ages.every((age, index) => {
    return age > 18;
});

console.log("Every:Age of array adult:", bool);

/*Fill --> Bir arrayin içerisindeki elemanlarını belli bir tek bir elemanla doldurmaya olanak sağlıyor */

//fruits.fill("Kiwi", 1, 2);
console.log("Fill:", fruits);

/*Filter --> Arrayin içerisindeki elemanlara göre arrayi filtreleyebiliriz. */

const result = ages.filter((age, index) => {
    return age < 18;
});
console.log("Filter:", result);

/* Find --> Belli bir array içerisinde belli bir eleman bulmanızı sağlar.
Bulduğu elemanı da return statement olarak ilgili değişkene eşitliyor .*/

const resultFind = ages.find(checkAge);
console.log("Find:", resultFind);

/* FindIndex --> Find ile benzer çalışır value dönmek yerine index numarasını döner */
const resultFindIndex = ages.findIndex((age, index) => {
    return age < 18;
});
console.log("Find Index:", resultFindIndex);

/*ForEach --> Bütün elemanlar üzerinden dönüp bize elemanın kendisini getirir. */

fruits.forEach((fruit, index) => {
    console.log("Index:", index, "Fruit:", fruit);
})

/*From --> Bir objeden bir array oluşturur ve bir objeyi bir arraye dönüştürmemize olanak sağlar. */

const fromArr = Array.from("ABCDEFG");
console.log("From:", fromArr);

/*Includes --> Yine Find gibi çalışır.Bir tane değişken bulur ve o değişkenin olup olmadığını söyler */

const bool1 = fruits.includes("Apple");
console.log("Is Apple Found:", bool1);

/* IndexOf --> Includes ile benzer biçimde çalışır ama bize hangi pozisyonda olduğunu döndürür.*/

const index = fruits.indexOf("Apple");
console.log("Apple Found Index:", index);

/* isArray -->Array olup olmadığını kontrol eder. */

const isArray = Array.isArray(fruits);
console.log("Is Fruits Array:", isArray);

/*Join --> Array elemanlarını belli bir karakterle birleştirmemize olanak sağlar */

let text1 = fruits.join(); //yanyana direk olarak ekler.
console.log("Join empty seperator:", text1);

let text2 = fruits.join("/");
console.log("Join slash seperator:", text2);

/* Keys --> Array iterasyonunda bir obje döner. Arrayin keylerini döner. */

const key = fruits.keys();
console.log("Keys:", key);

/* lastIndexOf --> Indexof'da farklı olarak nesneleri tersten saymaya başlar.*/

let index1 = fruits.lastIndexOf("Apple");
console.log("Index Of Apple", index1);

/* Map --> Bir array üzerinden başka bir array oluşturmamız için bize altyapı sağlar. */

const numbers = [65, 44, 12, 4];

const mapFn = (item, index) => {
    return item * 10;
}

const newArr = numbers.map(mapFn);
console.log("New Array", newArr);

/* Pop --> Arrayin sonundaki elemanı kaldırır.Yok eder. */

fruits.pop();
console.log("Pop:", fruits);

/* Push --> Arrayin sonuna eleman ekler. */
fruits.push("Mango");
console.log("Push:", fruits);

/* Reduce --> Soldan sağa doğru bütün elemanların üzerinden geçer ve toplama işlemi gibi bir işlem yapmanıza olanak sunar. */

const numbers1 = [15.5, 2.3, 1.1, 4.7];

const reduceFn = (total, num) => {
    console.log(num);
    console.log(total);

    return total + Math.round(num);
}

const initialValue = 0;

const total = numbers1.reduce(reduceFn, initialValue);
console.log("Total:", total);

/*ReduceRight --> Reduce aynısı ama bu sefer sağdan başlar  */

const numbers2 = [15.5, 2.3, 1.1, 4.7];

const reduceRightFn = (total, num) => {
    console.log(num);
    return total + Math.round(num);
}

const initialValue1 = 0;

const total1 = numbers1.reduceRight(reduceRightFn, initialValue);
console.log("Total:", total1);

/*Reverse --> Bir arrayi tersine çevirebiliriz. */

//fruits.reverse();
console.log("Reversed fruits:", fruits);

/*Shift --> 1. elemanı kaldırıp arrayin geri kalanını tutar. */

//const removed = fruits.shift();
//console.log("Removed:", removed);
console.log("Fruits:", fruits);

/*Slice --> Bir arrayi kesmemize olanak sunar. */

const fruitSlice = fruits.slice(1, 3); //1. indexi dahil ederk 3. indexe kadar keser. 3 dahil değil.
console.log("Slice:", fruitSlice);

/*Some --> İçerisinden biri bile doğruysa doğru olarak alır.Every metotunun tersi gibi bir şey */

const checkSome18 = (age, index) => {
    return age > 18;
}

const bool2 = ages.some(checkSome18);
console.log("Check if some 18:", bool2);

/*Sort --> sizi arrayin içerisindeki elemanları sıraya dizmeye olanak sağlar */

const points = [40, 100, 1, 5, 10];

const sortAsc = function(a, b) { return a - b };
const sortDesc = function(a, b) { return b - a };

const ascArr = points.sort(sortAsc);
console.log("Ascending Arr:", ascArr);

const descArr = points.sort(sortDesc);
console.log("Descending Arr:", descArr);

const normalArr = points.sort(); //artan sıralama verir.
console.log("Normal Sort:", normalArr);

/*Splice --> Bir arrayin içerisine element ekler veya element kaldırır. */

console.log("Fruits:", fruits);

//fruits.splice(2, 2, "Lemon", "Kiwi"); //2.elemandan sonra 2 eleman sil devamondakileri ekle.
//fruits.splice(1, 1);
console.log("Splice:", fruits);

/*ToString --> Arrayi stringe çevirmeye olanak sağlar. */

console.log("toString:", fruits.toString());

/*Unshift --> Arrayin başına bir eleman eklememize olanak sunar ve lengthi bize döner. */

//const length = fruits.unshift("Lemon", "Pineapple");
console.log("Unshift:", fruits);
console.log("Length:", length);

/*ValueOF --> Bir array içerisindeki primitive değerleri okuyabiliriz. */

const myArray = fruits.valueOf();
console.log("Value Of", myArray);