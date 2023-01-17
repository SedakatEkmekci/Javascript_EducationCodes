const clock = document.querySelector('.clock'); //classı clock olanı seçtik.

const tick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //console.log(hours, minutes, seconds); //her saniye artarak konsole yazdırıryor.

    /*HTML dosyama yazmak için ; */
    const html =
        `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span> 
    `
    clock.innerHTML = html;

};

setInterval(tick, 1000); //her saniye tick metotunu çağırıyor.