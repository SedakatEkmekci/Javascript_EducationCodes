// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => //{
//         response.json()
//         //console.log(response);
//         //}
//     )
//     .then(json => console.log(json))

fetch('example/can.json')
    .then(response => { //başarılı dönen data
        return response.json();
    }) //bu bize promise döndürür yeniden then dememiz gerekir.
    .then(data => {
        console.log(data);
    }).catch(err => { //herhangi bir error varsa yakalar.
        console.log(err);
    })