/*Arraydeki elemanların ayrık bir şekilde x'e tanımlanıp yazılmasına olanak sağlar */
const names = ["Can", "Deniz", "Ayşe"];

let text = " ";

for (let x of names) {
    console.log(x);
    text += x + " ";
}

console.log(text.trim());