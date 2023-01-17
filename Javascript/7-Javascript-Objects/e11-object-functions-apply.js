//Call gibi çalışır fakat tek farkı ekstra değişkenler verdiğinizde yan yana virgülle yazmak yerine bir liste bir array olarak vermemiz gerekir.

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

//APPLY

const fullName0 = person1.fullName();
console.log(fullName0);

const fullName1 = person1.fullName.apply(user1);
console.log(fullName1);

const fullName2 = person1.fullName.apply(user2);
console.log(fullName2);

const person2 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "/" + country
    }
}
const user3 = {
    firstName: "Seda",
    lastName: "Ekmekçi"
}

const fullNameWithPlace = person2.fullName.apply(user3, ["İzmir", "Türkiye"]);
console.log(fullNameWithPlace);