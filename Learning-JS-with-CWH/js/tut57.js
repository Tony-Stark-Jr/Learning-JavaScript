// Maps in JavaScript: We can use any type of key or value

const myMap = new Map();

const str1 = "Santosh", str2 = {}, str3 = function () { };

myMap.set(str1, "This is my Name");
myMap.set(str2, "This is a blank variable");
myMap.set(str3, "This is a empty function");
console.log(myMap);

// Getting the values from a Map
let value1 = myMap.get(str1);
console.log(value1);

// Get the size of the map
console.log(myMap.size);

// You can loop using for..of to get keys and values
for ([key, value] of myMap) {
    // console.log(key,value);
}

// Get only keys
for (key of myMap.keys()) {
    // console.log('key is', key);
}

// Get only values
for (value of myMap.values()) {
    // console.log('values is', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})

// Converting map to array
let myArray = Array.from(myMap);
console.log("Map to array is ", myArray);

// Converting map key to array
let myKeysArray = Array.from(myMap.keys);
console.log("Map to keys array is ", myKeysArray);

// Converting map values to array
let myValuesArray = Array.from(myMap.values);
console.log("Map to values array is ", myValuesArray);