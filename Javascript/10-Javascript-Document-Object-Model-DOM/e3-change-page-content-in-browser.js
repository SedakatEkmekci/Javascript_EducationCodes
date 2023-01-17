const pdegeri = document.querySelector('p');
console.log(pdegeri.innerText); //sadece p değeri içindeki ekrana bastırır.

pdegeri.innerText = 'Sedakat Ekmekçi Front-End Developer';
console.log(pdegeri.innerText); //içerik değiştirildi

const pValue = document.querySelectorAll('p');

pValue.forEach(a => {
    console.log(a.innerText);
    a.innerText += ' yeni alan'; //olanı korur yanına yeni eklemeler yapar.
    console.log(a.innerText);
})

const icerik = document.querySelector('.icerik');
console.log(icerik.innerHTML);

//icerik.innerHTML = '<h2> Vue Js,React JS, Angular Js</h2>';
icerik.innerHTML += '<h2> Vue Js,React JS, Angular Js</h2>';
console.log(icerik.innerHTML);

const students = ['can', 'seda', 'elif'];
students.forEach(student => {
    icerik.innerHTML += `<p>${student}</p>`;
})
console.log(icerik.innerHTML);