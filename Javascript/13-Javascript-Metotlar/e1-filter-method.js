const points = [70, 75, 25, 35, 10, 80, 27];

const studentsPassed = points.filter(point =>
    point > 50)
console.log(studentsPassed);

const students = [
    { name: 'can', passed: true },
    { name: 'seda', passed: false },
    { name: 'elif', passed: false },
    { name: 'osman', passed: true },
];

const passingStudents = students.filter(student => {
    return student.passed;

})
const failedStudents = students.filter(student => {
    return !student.passed;
})

console.log('passed:', passingStudents);
console.log('failed:', failedStudents);