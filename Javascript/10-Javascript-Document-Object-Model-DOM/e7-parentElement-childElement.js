const section = document.querySelector('section');
console.log(section.children);
console.log(Array.from(section.children)); //Array'e çevirdik.

//forEach içinde kullanmamız için arraye çevirmemiz gerekir.
Array.from(section.children).forEach(child => {

    child.classList.add('section-element');
})

const heading = document.querySelector('h2');
console.log(heading.parentElement); //section
console.log(heading.parentElement.parentElement); //body
console.log(heading.nextElementSibling); //bir sonraki aynı hizade yer alan kardeşine ulaşır. Konsola react basar.
console.log(heading.previousElementSibling); //bir önceki aynı hizada yer alan kardeşe ulaşır. Merhaba konsola basılır.
console.log(heading.nextElementSibling.parentElement.children); //Html collection içerisindeki 6 element ekrana gelir.