// Aysnc/ Await in JavaScript


async function santosh() {
    console.log('Inside santosh function');
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log('user resolved');
    return users;
}

console.log("Before calling santosh");
let sa = santosh();
console.log('After calling harry');
console.log(sa);
sa.then((data) => console.log(data));
console.log("last line of this js file");