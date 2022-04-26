// Prototype Inheritnace in JavaScript

const proto = {
    slogan: function () {
        return `This is best company i ever work`
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// This creates harry object
// const harry=Object.create(proto);
// harry.name="Harry";
// harry.role="Programmer";

// const harry1 = Object.create(proto, {
//     name: { value: "harry", writable: true },
//     role: { value: "programmer" }
// })

// harry1.changeName("Harry2")
// console.log(harry1);


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best regards ${this.name}`;
}

// Create an object from this constructor now
let harryObj = new Employee("Santosh", 30000, 2);
console.log(harryObj);

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 3, 0, "JavaScript")
console.log(rohan);




// Q. Create a cake material and make create different type of cake
function CakeMaterial(name, quanity, quality) {
    this.name = name;
    this.quanity = quanity;
    this.quality = quality;
}

CakeMaterial("strawberry", "1kg", "Good")

function Cake(name2, name3) {
    CakeMaterial.call(this, name, quanity, quality);
    this.name2 = name2;
    this.name3 = name3;
}

const firstCake = new Cake("floor", "sugar");
console.log(firstCake);