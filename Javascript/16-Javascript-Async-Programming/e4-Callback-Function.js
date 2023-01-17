const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request,request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.responseText);
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            //console.log("Başarılı cevap alamadık!");
            callback('Başarılı cevap alamadık!', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    request.send();
}

console.log(1);
console.log(2);

//geri çağırılan fonksiyon bu olur.
getTodos((err, data) => {
    //console.log(err, data);
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);

/*Async olarak çalıştığı için kod bekleme yapmadan 1234 değerlerini yazdırır.
en son da fonksiyonu çalıştırıp ekrana yazdırır. */