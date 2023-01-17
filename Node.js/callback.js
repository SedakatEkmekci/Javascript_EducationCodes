/* 
setTimeout(() => {
    console.log("Merhaba");
}, 2000);


setInterval(() => {
    console.log("Merhaba ben her saniye çalışacağım");
}, 1000);

*/
/*
const sayHi = (cb) => {
    cb();
};

sayHi(() => {
    console.log("Hello");
});
*/

//import fetch from "node-fetch";
/*
fetch("https://jsonplaceholder.typicode.com/users") //önce users bitecek ardından postlar başlıcak.
    .then((data) => data.json())  
    .then((users) => {
        console.log("Users yüklendi!", users);

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((data) => data.json())
            .then((post) => console.log("Post 1 yüklendi!", post));

        fetch('https://jsonplaceholder.typicode.com/posts/2')
            .then((data) => data.json())
            .then((post) => console.log("Post 2 yüklendi!", post));


    });
    */

/* Await mutlaka bir async fonksiyonun içinde olmalı

async function getData() {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json(); //await ifadesi kodu bekletir yazmazsak direk çalışırç
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
}

getData();
*/

import axios from "axios";
import fetch from "node-fetch";

/*
--- Fetch yerine daha kısa kodla axios kullanabiliriz. İki yöntem de datayı çağırmak için kullanılır. ---
import axios from "axios";

(
    async () => {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
        const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
         const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");


        console.log("users", users);
        console.log("post1", post1);
        console.log("post2", post2);
    })();

*/
/*
const getComments = (number) => {

    //Promise iki parametre alır. işlem başarılıysa resolve başarısızsa reject döner.
    //Bir Promise resolve olduğunda .then() çalışır.Reject olduğunda .catch() çalışır.
    return new Promise((resolve, reject) => {
        // resolve('comments'); //resolve'a geçtiğim parametre then bloğuna düşer
        //parametrenin 1 geldiğinde resolve 2 geldiğinde reject olması için;
        if (number === 1) {
            resolve({ text: "Selam" }); //resolve her zaman string almak zorunda değil.
        }
        reject('Bir problem oluştu');
    });

};

getComments(1) //bu Promise resolve oldu
    .then(() => console.log(number)) //resolve çalıştı.
    .catch((e) => console.log(e)); //reject çalıştı
*/

// Usersları çeken bir Promise yapısı oluşturalım

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");

        //resolve(data);
        reject('Bir sorun oluştu');

    });
};

//Postları getiren Promise yapısı

const getPosts = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts" + post_id);

        //resolve(data);
        reject('Bir sorun daha oluştu');
    });
};
/*
//Fonksiyonları sıralamak için anonim fonksiyon yazıyoruz.
//hata yakalamak için try-catch bloğu kullanıyoruz.
(async () => {
    try {

        const users = await getUsers();
        const post = await getPosts(1);

        console.log(users);
        console.log(post);

    } catch (error) {
        console.log(error);
    }


})();
*/
//Tüm Promiseleri aynı anda çalıştırmak için
Promise.all([getUsers(), getPosts(1)])
    .then(console.log)
    .catch(console.log);

