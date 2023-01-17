const form = document.querySelector('.signupForm');
const message = document.querySelector('.message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userName = form.username.value; //formdaki usernameê eşitledik.
    const userNamePattern = /^[a-z]{6,10}$/;

    if (userNamePattern.test(userName)) {
        message.textContent = 'Başarılı';

    } else {
        message.textContent = 'Lütfen hepsini küçük harf ve 6 ile 12 karakter arasında giriniz.';

    }
})