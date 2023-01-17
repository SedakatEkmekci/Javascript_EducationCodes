const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x koordinatı: ${e.offsetX}, y koordinatı: ${e.offsetY}`;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY); //önce x sonra y koordinatı consola yazılır.
})