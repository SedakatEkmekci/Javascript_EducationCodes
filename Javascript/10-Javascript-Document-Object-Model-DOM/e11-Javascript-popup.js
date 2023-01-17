const button = document.querySelector('button');
const mainPopUp = document.querySelector('.main-popup');
const close = document.querySelector('.popup-close');

//tıklaya bastığımızda pop-up açılıyor.
button.addEventListener('click', () => {
    mainPopUp.style.display = 'block';

})

//X' tıkladığımızda kapanması için
close.addEventListener('click', () => {
    mainPopUp.style.display = 'none';
})

//sayfada herhangi bir yere basıldığında kapanması için
mainPopUp.addEventListener('click', e => {

    console.log(e.target);
    if (e.target.className === 'main-popup') {
        mainPopUp.style.display = 'none';
    }

})