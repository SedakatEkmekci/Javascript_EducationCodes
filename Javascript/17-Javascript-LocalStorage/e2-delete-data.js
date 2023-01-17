 localStorage.setItem('name', 'Seda');
 localStorage.setItem('age', 23);

 let ad = localStorage.getItem('name');
 let yas = localStorage.getItem('age');

 console.log(ad, yas);

 /* sadece bir property kaldırmak için removeItem kullanırız */

 //localStorage.removeItem('name');
 /*set edilen tüm değerleri kaldırmak için clear metotu kullanılır. */

 localStorage.clear();
 ad = localStorage.getItem('name');
 yas = localStorage.getItem('age');
 console.log(ad, yas);