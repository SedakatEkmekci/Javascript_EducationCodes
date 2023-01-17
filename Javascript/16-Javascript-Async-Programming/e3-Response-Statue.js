const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) { //başarılı durumda
        console.log(request.responseText);
    } else if (request.readyState === 4) { //başarılı olmayan durumda
        console.log("Başarılı cevap alamadık!");
    }
});


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1'); //yanlış link yazarsak başarılı cevap alamaz
request.send();