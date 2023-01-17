for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // 5 değerini geçer console.log çalışmaz
    }
    if (i === 8) {
        break; //loop tamamlanmış olur.
    }
    console.log(i);
}
console.log("*************************");

let counter = 0;

/* do-while ve while'da break ve continue çalışacaksa  sayacın üst kısmında olması gerekir.
yoksa sayaç bir değere geldiğinde sürekli çalışacağı için sonsuz döngüye girer */

while (counter < 10) {
    console.log(counter);
    counter++;
    if (counter === 5) {
        continue;
    }

    if (counter === 8) {
        break;
    }
}
console.log("*************************");
let c = 0;
do {
    console.log(c);
    c++;
    if (c === 5) {
        continue;
    }
    if (c === 8) {
        break;
    }

} while (c < 10)