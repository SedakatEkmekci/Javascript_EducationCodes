/* İki Tarih Arasındaki Farkı Bulma */

const startDate = new Date('08/15/2018 09:45:00');
const now = new Date();
console.log(startDate);

const diff = now.getTime() - startDate.getTime();
console.log(diff); //2 tarih arasındaki farkı milisecond tarzında aldık.

const mins = Math.round(diff / 1000 / 60); //dakika farkını bulmuş olduk.
console.log(`Video çekmeye ${mins} dakika önce başladım`);

const hours = Math.round(mins / 60); //dakikayı saate çevirdik.
console.log(`Video çekmeye ${hours} saat önce başladım`);

const days = Math.round(hours / 24); //saati güne böldük
console.log(`Video çekmeye ${days} gün önce başladım`);

const years = Math.round(days / 365); //günü yıla çevirdik
console.log(`Video çekmeye ${years} yıl önce başladım`);

const timestamp = 13247865203455;
console.log(new Date(timestamp)); //timestamp değerini tarih olarak elde etmiş oldu.