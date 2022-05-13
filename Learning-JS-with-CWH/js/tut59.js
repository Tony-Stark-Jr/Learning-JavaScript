// Symbols in JavaScript

let sym1 = Symbol("My Identityfiers")
console.log("Symbol is", sym1);
console.log("Symbol type is", typeof sym1);

let sym2 = Symbol("My Identityfiers")

console.log(sym1 === sym2);

let a = "Santosh";
let b = "Santosh";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);
console.log(NaN === NaN);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('for k2');

myObj = {};
myObj[k1] = "harray";
myObj[k2] = "Rohan";
myObj['name'] = 'Good boy'
myObj['4'] = 'Stark'

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);  // !! ALERT !!: Can't do this to get Rohan because it is same as myObj["k2"]

// Symbols are ignored in for in loop
for (let key in myObj) {
    console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));