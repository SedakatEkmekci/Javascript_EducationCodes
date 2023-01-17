const button = document.querySelector('button');

//butona tıklandığında click eventi çalışır ve consola mesaj çıkar.
button.addEventListener('click', () => {
    console.log('Tıklandı');
})

//li etiketlerinden herhangi birine tıklandığında console mesaj verir
const liElements = document.querySelectorAll('li');

liElements.forEach(element => {
    element.addEventListener('click', e => {
        e.stopPropagation(); //diğer elemanların etkilenmemsi için ul için verilen click eventi çalışmadı.
        console.log(e.target);
    })
})

const ul = document.querySelector('ul');
ul.addEventListener('click', e => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
})



button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Javascript';

    ul.append(li); //sonuna ekler.
    // ul.prepend(li); //başına ekler
})