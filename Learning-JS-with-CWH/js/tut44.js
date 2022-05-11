// Error Handling & Try Catch in JavaScript

// Pretend this is coming from a server as response 
let a = 'Harry bhai';
a = 'santosh';
if (a != 'santosh') {
    throw new Error('New is undefined')
} else {
    console.log("No error");
}

let Santosh="Name"
try {
    console.log(Santosh);
} catch {
    console.log("Are you okay");
} finally {
    console.log("I can't care I will run this both sistuation ever in try or in catch");
}