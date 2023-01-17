const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText); //Başarılı gelen datayı JSON formatına çevirdik.
            callback(undefined, request.responseText);
        } else if (request.readyState === 4) {
            callback('Başarılı cevap alamadık!', undefined);
        }
    });
    request.open('GET', resource);
    request.send();
};
getTodos('example/can.json', (err, data) => {
    console.log(data);
    getTodos('example/osman.json', (err, data) => {
        console.log(data);
    });
    getTodos('example/tuba.json', (err, data) => {
        console.log(data);
    });
});