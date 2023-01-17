// Map'in objelerden tek farkı metotlar aracılığyla propertylerin set edilmesi veya okunmasıdır.

//CREATE MAP 
const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
])
console.log(fruits1);

//SET & OVERRIDE -->Set isimle method üzerine yazar.

fruits1.set("kiwi", 100);
fruits1.set("apples", 800); //apples 800 olarak güncelledik.

console.log(fruits1);

//GET -->
console.log("apples:", fruits1.get("apples"));
console.log("bananas:", fruits1.get("bananas"));
console.log("oranges:", fruits1.get("oranges"));
console.log("kiwi:", fruits1.get("kiwi"));

//SIZE
console.log(fruits1.size);

/*DELETE --> Bir map içerisinden key ve value silmeye sebep olur
 HAS --> İçerisinde var mı yok mu diye kontrol eder varsa true yoksa false cevabını verir
 CLEAR --> Bütün mapin içerisini tamamen temizler,boşaltır. */

console.log(fruits1.has("apples"));
fruits1.delete("apples");
fruits1.delete("kiwi");
console.log(fruits1);
fruits1.clear();
console.log(fruits1);