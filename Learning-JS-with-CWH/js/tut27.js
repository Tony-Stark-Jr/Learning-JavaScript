// Object Literals, Constructors and Object Oriented JavaScript

// Object Literal for creating objects
let car = {
    name: "Maruti 800",
    topSpeed: 100,
    run: function () {
        console.log("Maruti 800 is running");
    }
}

// We have already seen constructors like these:
// new Date();

// Creating a constructor for cars
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is Running`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.speed} Km/H than Mercendes`);
    }
}

let car1 = new GeneralCar("Maruti Alto", 120);
let car2 = new GeneralCar("Lamborghini", 300);
let car3 = new GeneralCar("suziki", 125);
console.log(car1,car2,car3);