 localStorage.setItem('name', 'Seda'); //name adlı propertyde seda değerini tutar.
 localStorage.setItem('age', 23); //age adlı propertyde yaşımızı tutar

 //set ettiğim değerleri çağırmak için
 let ad = localStorage.getItem('name');
 console.log(ad);

 let yas = localStorage.getItem('age');
 console.log(yas);

 //update etmek için
 localStorage.setItem('name', 'Sedakat Ekmekçi');
 localStorage.age = 25;

 ad = localStorage.getItem('name');
 yas = localStorage.getItem('age');
 console.log(ad, yas);