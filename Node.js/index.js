// import slugify from "slugify";

// const title = slugify('some string lorem ipsum', "+");

// console.log(title);

//import hello from "./myModule.js"; //default olarak export edilen moduller bu şekilde import edilir.

//import { topla, cikar } from './myModule.js'; //default olarak export edilmeyenler bu şekilde import edilir.

import hello, { topla, cikar, text, user, users } from './myModule.js'; //toplu olarak böyle import edilir.

hello("Mehmet");
console.log(topla(2, 4));
console.log(cikar(2, 4));
console.log(text);
console.log(user);
console.log(users);