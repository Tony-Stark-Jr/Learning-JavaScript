// JavaScript Regular Expressions and & Related functions
let reg = /harry/;  //This is a regular expression literal in js
// let reg = /harry/g;  //g for globabl
// let reg = /harry/i;  //i for caseinsensetive


// console.log(reg);
// console.log(reg.source);

let s = 'This is great code with harry and harry brother'

// Function to match expressions
// 1. exec() - This function will return an arry for match or null for no match
let result = reg.exec(s);


// result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result);  // We can use multiple exec with global flag

// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }


// 2. test() - Returns true or false
let result2 = reg.test(s)
// console.log(result2); // This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let results3 = reg.match(s) //This is wrong!!!
let result3 = s.match(reg) //This is right!!!
// console.log(result3);

// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) //This is wrong!!!
let result4 = s.search(reg)
// console.log(result4);


// 5. replace() - Returns new replaced string with all the replacements (if no flag in given, first match will be replaced)
let result5 = s.replace(reg, 'Santosh');
// console.log(result5);


// Practice
let str = "Hello world My name is Santosh"

let regular = /Santosh/;

let results1=regular.exec(str);
console.log(results1);

let results2=regular.test(str);
console.log(results2);

let results3=str.match(regular);
console.log(results3);

let results4=str.search(regular);
console.log(results4);

let results5=str.replace(regular,"Stark");
console.log(results5);