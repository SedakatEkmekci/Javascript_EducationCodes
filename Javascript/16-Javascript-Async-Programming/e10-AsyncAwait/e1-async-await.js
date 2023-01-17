const getTodos = async() => { //async bir fonksiyon geriye her zaman promise döndürür.
    /* async kullandığımız zaman herhangi bir backend api ya da normal local bir dosyadan istek attığımız zaman fetch ettiğinizde await kullanmamız lazım */
    let response = await fetch('example/can.json'); //await promise chain işi yapar fetch'in işi bittiğinde promise döndüğünde response'a atar.
    if (response.status !== 200) { //yeni bir hata tanımladık
        throw new Error("Doğru endpointe istek atmadınız");
    }

    const data = await response.json(); //içindeki promise'i data adındaki değere atadım.
    return data;
};

getTodos().then(response => { //başarılı sonuç aldığımızda
        return response.json();
    })
    .catch(err => { //hata yakaladığında
        console.log(err);
    });







// fetch('example/can.json')
//     .then(response => { 
//         return response.json();
//     }) 
//     .then(data => {
//         console.log(data);
//     }).catch(err => { 
//         console.log(err);
//     })