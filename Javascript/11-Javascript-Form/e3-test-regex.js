const username = 'canboz';
const pattern = /^[a-z]{6,10}$/;

// let result = pattern.test(username);
// console.log(result);

// if (result) {
//     console.log('Başarılı');
// } else {
//     console.log('Başarısız');
// }

let result = username.search(pattern);
console.log(result);