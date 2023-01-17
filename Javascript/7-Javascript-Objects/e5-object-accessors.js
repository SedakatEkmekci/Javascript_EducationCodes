//GETTER
/*let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    get ageGetter() {
        return this.age;

    }
};

const age = person.ageGetter;
console.log("Age:", age);*/
//SETTER
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    get ageGetter() {
        return this.age;
    },
    set ageSetter(age) {
        this.age = age;
    }
};

person.ageSetter = 50;
console.log("Age:", person.ageGetter);