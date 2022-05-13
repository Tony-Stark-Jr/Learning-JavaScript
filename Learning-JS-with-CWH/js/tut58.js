// Sets In JavaScript

// Set stores unique values
const mySet = new Set(); //Initialize an empty set
console.log('The set looks like: ', mySet);

// Adding values to this set
mySet.add("Santosh");
mySet.add("hello")
mySet.add("hello");
mySet.add("true");
mySet.add("false");
mySet.add(5764);
console.log('The set looks like this now: ', mySet);

// Use a constructor to initialize the set
// let mySet2=new Set([1,45,true,false,"Santosh","Santosh"])
// console.log('The set looks like this now: ',mySet2);

console.log(mySet.size);  // Get the size of the set


console.log(mySet.has("Stark"));  // Check wheather set has 346 or not

console.log(mySet.size);

console.log("Before removal", mySet.has("Santosh"));
console.log(mySet.delete("Santosh"));  // Remove an element from the set
console.log("After removal", mySet.has("Santosh"));


// Iterating a set
for (let item of mySet) {
    console.log("Item of mySet", item);
}

mySet.forEach((item) => {
    console.log("Item of mySet", item);

})

// Quiz: Can you use Array.from(mySet) to convert set into an array?

let array = Array.from(mySet);
console.log(array);

let myArray = ["hello", "Santosh", "Santosh", 890, 890, true, false];
