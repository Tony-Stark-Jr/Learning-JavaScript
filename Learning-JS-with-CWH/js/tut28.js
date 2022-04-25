// Object Prototype in JavaScript

let obj={
    name:"harry",
    channel1:"Code With Harry",
    address:"Mars"
}


function Obj(givenName){
    this.name=givenName
}

Obj.prototype.getName=function(){
    return this.name;
}

let obj2=new Obj("Rohan Das")
console.log(obj2);