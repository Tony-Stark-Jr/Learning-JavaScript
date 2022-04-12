// console.log("Local & Session Storage in Javascript");

let impArray = ['Adrak', 'pyaz', 'bhindi'];


// Add a key-value pair inside local storage
localStorage.setItem("Name", "Santosh")
localStorage.setItem("Name2", "Tony Stark Jr.")
localStorage.setItem("Sabzi", JSON.stringify(impArray))

// Clears the entire local storage
// localStorage.clear();


// Retrieve an item from the local Stoage
// let Name = localStorage.getItem("Name");
// let Name2 = localStorage.getItem("Name2");
let sabzi = JSON.parse(localStorage.getItem("Sabzi"));
// console.log(Name);
// console.log(Name2);
console.log(sabzi);

sessionStorage.setItem("sessonName", "Santosh")
sessionStorage.setItem("sessonName2", "Tony Stark Jr.")
sessionStorage.setItem("sessonSabzi", JSON.stringify(impArray))