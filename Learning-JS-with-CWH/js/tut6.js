// String Methods

let html = 'Hello World';
html = html.concat('!!!, my name is Santosh Marar')
// console.log(html);
// console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());
// console.log(html.indexOf("my"));
// console.log(html.lastIndexOf("r"));
// console.log(html.includes("Santosh"));
// console.log(html.charAt(0));
// console.log(html.endsWith("Marar"));
// console.log(html.substring(0,6));
// console.log(html.slice(0,6));

// To convert string into array
// console.log(html.split(" "));

console.log(html.replace("Santosh Marar", "Tony Stark Jr."));


// Template literal
let name = "Tony Stark Jr.";
let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
,<h1> This is heading </h1>
<p> I like ${fruit1} and ${fruit2}</p>`
document.body.innerHTML = myHtml

