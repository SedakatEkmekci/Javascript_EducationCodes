const names = ['can', 'tuba', 'elif', 'hakan', 'osman'];

names.sort(); //alfabetik olarak sıraladı
names.reverse(); //sondan başa doğru sıralar.
console.log(names);

const points = [70, 75, 25, 3, 10, 80, 27];
//points.sort(); //ilk sayı değerine göre küçükten büyüğe doğru sıralar.
//points.reverse(); //büyükten küçüğe doğru sıralar.ilk sayı değerine göre

points.sort((a, b) => b - a); //büyükten küçüğe sıralama yaptık
points.sort((a, b) => a - b); //küçükten bütüğe sıralama
console.log(points);




const students = [
    { name: 'can', point: 40 },
    { name: 'tuba', point: 60 },
    { name: 'elif', point: 30 },
    { name: 'osman', point: 100 },
];
//puanlara göre objeleri sıraladık.
//students.sort((a, b) => {
//     if (a.point > b.point) {
//         return -1;
//     } else if (b.point > a.point) {
//         return 1;
//     } else {
//         return 0;
//     }

// });

students.sort((a, b) => b.point - a.point); //yukarıdakinin kısa hali

console.log(students);