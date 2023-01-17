const form = document.querySelector('.signupForm');
const userName = document.querySelector('#username');


form.addEventListener('submit', e => {
    e.preventDefault(); //sayfanın yenilenmesini engeller.
    //console.log('Form Gönderildi');
    //console.log(userName.value);
    console.log(form.username.value); //yazılan değeri ekrana bastırır.
})