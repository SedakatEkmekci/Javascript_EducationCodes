const variable = [
    { "hobby": "swimming", "person": "Can" },
    { "hobby": "playing card", "person": "Can" },
    { "hobby": "take a trip", "person": "Can" }
];

console.log(JSON.stringify(variable)); //Json stringe çevirir.

localStorage.setItem('todos', JSON.stringify(variable)); //set ettik

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));