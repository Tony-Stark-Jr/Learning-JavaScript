// For.. of Loop vs For.. in Loop (When to use which?)

let people = ["Harry", "Santosh", "Suman", "Suraj", "Dipak"];

// **********For in loop*******

// Traditional for loop:
for (let i = 0; i < people.length; i++) {
    // console.log(people[i]);
}

// 1. ITERATING AN OBJECT
let obj = {
    name: "Santosh Marar",
    age: 18,
    hobbies: "Web Development, App Development"
}

// 1.1 Iterating an object using Traditional for loop:
for (let index = 0; index < Object.values(obj).length; index++) {
    // console.log(Object.values(obj)[index]);
}


// 1.2 Iterating an object using for-in loop:
for (let key in obj) {
    // console.log(obj[key]);
}

// 2. ITERATING A STRING
// We can use for in with strings to loop through all the characters
let myString = "This is good tutorial";

for (let char of myString) {
    // console.log(char);
}

// Quiz: Use traditional for loop to iterate through the same string
for (let i = 0; i < myString.length; i++) {
    // console.log(myString[i]);
}

// For of loop
people = ["Harry", "Santosh", "Suman", "Suraj", "Dipak"];

for(let name of people){
    console.log(name);
}