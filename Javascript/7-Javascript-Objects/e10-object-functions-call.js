/* Bir obje içerisindeki metotu diğer bir obje içerisinde kullanmamıza olanak sağlar ya da bir obje içerisind*/

const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const user1 = {
    firstName: "John",
    lastName: "Doe"
}

const user2 = {
    firstName: "Seda",
    lastName: "Ekmekçi"
}

//CALL 

const fullName0 = person1.fullName();
console.log(fullName0);

const fullName1 = person1.fullName.call(user1);
console.log(fullName1);

const fullName2 = person1.fullName.call(user2);
console.log(fullName2);

const person2 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + "/" + country
    }
}
const user3 = {
    firstName: "Seda",
    lastName: "Ekmekçi"
}

const fullNameWithPlace = person2.fullName.call(user3, "İzmir", "Turkey");
console.log(fullNameWithPlace);