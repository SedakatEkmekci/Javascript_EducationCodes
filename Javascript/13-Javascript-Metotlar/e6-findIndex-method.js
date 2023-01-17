const points = [70, 75, 25, 35, 10, 80, 27];
const arrayIndex = points.findIndex(point => point == 35);
points[arrayIndex] = 45; //35 değerini 45 olarak güncelledik.
console.log(points);

const students = [
    { name: 'can', point: 40 },
    { name: 'seda', point: 60 },
    { name: 'elif', point: 30 },
    { name: 'osman', point: 100 },
];

const objectIndex = students.findIndex(student => student.name == 'osman'); //arrayda kaçıncı indexde olduğunu buluyor.
students[objectIndex].name = 'Hakan';
console.log(students);

const objectIndex1 = students.findIndex(student => student.name == 'elif'); //arrayda kaçıncı indexde olduğunu buluyor.
students[objectIndex1].point = '85';
console.log(students);