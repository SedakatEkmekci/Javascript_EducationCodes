/*Önce 1 2 3 4 çalışır daha sonra 2 sn bekler ve SetTime Out çalışır. */
console.log(1);
console.log(2);


setTimeout(() => {
    console.log('Sedakat Ekmekçi');
}, 2000);

console.log(3);
console.log(4);