// Object Prototype in JavaScript

// Object literal : Object.prototype
let obj = {
    name: "harry",
    channel1: "Code With Harry",
    address: "Mars"
}


function Obj(givenName) {
    this.name = givenName
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (newName) {
    return this.name = newName;
}

let obj2 = new Obj("Rohan Das")
console.log(obj2);