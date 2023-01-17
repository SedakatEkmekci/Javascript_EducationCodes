const link = document.querySelector('a'); //a etiketini çağırdık
console.log(link.getAttribute('href')); //içerisindeki attribute ulaştık ve ekrana yazdırdık.

link.setAttribute('href', 'https://www.linkedin.com/'); //linki güncelledik.
link.textContent = 'Linkedin'; //içerisindeki yazıyı da güncelledik.
console.log(link.innerText);

const pValue = document.querySelector('p');
console.log(pValue.getAttribute('class'));
pValue.setAttribute('class', 'error'); //class'ın ismini error olarak güncelledik.
pValue.setAttribute('style', 'color:blue'); //yeni attribute ekledik. ve rengini değiştirdik.