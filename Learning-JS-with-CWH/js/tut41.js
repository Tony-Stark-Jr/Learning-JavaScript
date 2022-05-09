// Arrow functions in JavaScript

// Creating a regular function
// const harry = function () {
//     console.log("Harry is one of the best teacher");
// }


// Converting it to an arrow function Arrow function
// const harry=()=>{
//     console.log("Harry is one of the best teacher");
// }

// harry();

// Function returning something
// const greet=function(){
//     return "Good Morning"
// }

// console.log(greet());


// One liners do not require braces and return
// One line will automatically return
// const greet=()=> "Good Morning"

// const greet = () => ({ name: "Harry" })


// Single parameters do not need parenthesis
//  but will have to put parethesis if there are multiple parameters
const greet = (name,ending) => `Good Morning ${name} ${ending}`

console.log(greet('Harry','Bye'));