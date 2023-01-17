const hata = document.querySelector('p'); //html sayfasındaki ilk p etiketini seçer.
console.log(hata);

const hata1 = document.querySelector('.error'); //classı error olan ilk rastladığını seçer.
console.log(hata1);

const hata2 = document.querySelector('div.error'); //divin içinde classı error olanları alır.
console.log(hata2);

const hata3 = document.querySelectorAll('p'); //p etiketine sahip olan tüm satırları seçer.
console.log(hata3);
console.log(hata3[0]); //html sayfa içeriğini ekrana basar.
console.log(hata3[1]);

//Hepsini ekrana yazzdırmak için for each döngüsü kullanılır.
hata3.forEach(hata => {
    console.log(hata);
})