const content = document.querySelector('p');
console.log(content.classList); //içerisindeki tüm classları gösterir.

content.classList.add('Seda'); //seda isimli class ekledik.
content.classList.remove('error'); //error classını kaldırdık.

/* p etiketlerinde içinde error geçenlere error success geçenlere succes classı verme projesi */

const pValue = document.querySelectorAll('p');

pValue.forEach(pElement => {
    if (pElement.textContent.includes('error')) { //p etiketi error kelimesini içeriyor mu?
        pElement.classList.add('error');
    }
    if (pElement.textContent.includes('succes')) {
        pElement.classList.add('success');
    }

})