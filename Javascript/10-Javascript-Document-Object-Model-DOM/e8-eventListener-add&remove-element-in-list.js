const button = document.querySelector('button');

//butona tıklandığında click eventi çalışır ve consola mesaj çıkar.
button.addEventListener('click', () => {
    console.log('Tıklandı');
})

//li etiketlerinden herhangi birine tıklandığında console mesaj verir
const liElements = document.querySelectorAll('li');

liElements.forEach(element => {
    element.addEventListener('click', e => {
        // console.log(e);
        // console.log(e.target); //tıkladığın elemana ulaşır.
        //  console.log(' li ye  tıklandı');
        //  e.target.style.color = 'blue'; //tıkladıktan sonra rengi değişir.
    })
})

const ul = document.querySelector('ul');
//ul.remove(); //ul etiketini html'den kaldırdık

const liElement = document.querySelectorAll('li');

liElements.forEach(element => {
    element.addEventListener('click', e => {
        e.target.remove();
    })
})

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Javascript';

    ul.append(li); //sonuna ekler.
    ul.prepend(li); //başına ekler
})