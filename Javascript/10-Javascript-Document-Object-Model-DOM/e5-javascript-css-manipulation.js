const heading = document.querySelector('h1');
//heading.setAttribute('style', 'padding:50px'); //Override yaptı.color yok oldu.

console.log(heading.style); //bütün style propertyleri gelir.

heading.style.padding = '50px'; //color propertysini ezmedi.
//Bu yöntem ile istediğimiz kadar css ekleyebiliriz.

heading.style.fontSize = '60px';
heading.style.fontWeight = 'bold';