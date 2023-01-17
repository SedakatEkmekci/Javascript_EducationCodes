/*function topla(a, b) {
  return a + b;
 }

 export default topla;
*/

/* 2.yol 

 const topla = function topla(a, b) {
     return a + b;
}
 export default topla;
*/

/*3.Yol

const topla = (a, b) => {
    return a + b;
}
export default topla;
*/

// 2 ayrı fonksiyon varsa ikisini ayrı ayrı dışa aktarmamız gerekir.

export default hello = (name) => {
    //console.log("hello " + name);
    console.log(`hello ${name}`);
};


export const topla = (a, b) => a + b;

export const cikar = (a, b) => a - b;

export const text = "Text;" //String de dışa aktarabilirim.Fonksiyon olmak zorunda değil.
//Bir objeyi de dışa aktarabilirim.
export const user = {
    name: "Sedakat",
    surname: "Ekmekçi",
};

//Array de dışa aktarılabilir.

export const users = [{
    name: "Ahmet",
    surname: "Tarık"
},
{
    name: "Tayfun",
    surname: "Erbilen"
}];

//ayrı ayrı export yazmak yerine

//export { hello, topla, cikar , text , user, users};

//olarak da yazabiliriz. 