class Plane {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    show() {
        return this.brand + " / " + this.model;
    }

    static mergeBrandAndModel(brand, model) {
        return brand + " / " + model;

    }
}
//const brandAndModel = new Plane("Boeing", "747-800");
//console.log(brandAndModel.show());

const brandAndModel = Plane.mergeBrandAndModel("Boeing", "747-800");
console.log(brandAndModel);