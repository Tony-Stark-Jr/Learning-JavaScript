// Element Selector
// 1. Single element selector
// 2. Multi element selector


// 1. Single element selector
let element = document.getElementById('myFirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red'
element.innerText = 'I am learning JavaScript';
element.innerHTML = '<h1>I am learning JavaScript</h1>'
// console.log(element.innerText);

let sel = document.querySelector('#myFirst')
sel = document.querySelector('.child')
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel);


// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
// console.log(elems);

for (let i = 0; i < elems.length; i++) {
    const element = elems[i];
    element.style.color = 'blue'

}

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'purple';
// })



