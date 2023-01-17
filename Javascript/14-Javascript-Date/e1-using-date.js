const now = new Date(); //bugünün tarihini yazar.
console.log(now);
console.log(typeof now); //type'ını verir.

console.log('Year:', now.getFullYear());
console.log('Month:', now.getMonth() + 1); //ocak 0. indexde tutulduğu için +1 eklememiz gerekir.
console.log('Date:', now.getDate());
console.log('Day:', now.getDay()); //pazar 0.indexde tutulduğu için +1 ekleyerek doğru güne geliriz.
console.log('Hours:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());


console.log('timestamp:', now.getTime()); //01.01.1970 tarihinden itibaren günümüzdeki tarihe kadar ne kadar milisaniye geçtiğini gösterir.

console.log(now.toDateString()); //sadece tarih bilgisine ulaşılır gün ay yıl olarak.
console.log(now.toTimeString()); //sadece dakika saat bilgisine ulaşılır.
console.log(now.toLocaleDateString()); //localde tutulan tarih bilgisine ulaşılır.