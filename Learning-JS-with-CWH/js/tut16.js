// console.log("Creating, Remvoing & Replacing Elements");

// Creating element
// let element = document.createElement('li')
// let text = 'I have a dreams';
// element.append(text)

// Add a class and id name to the li element
// element.className = 'childul';
// element.id = 'createdLi';
// element.setAttribute('title', 'myTitle');
// element.removeAttribute('title');
// element.hasAttribute('title');
// element.innerHTML = "<b>I have a drems</b>"

// let ul = document.querySelector('ul.this');
// ul.append(element)
// console.log(element);

// let element=document.createElement('h3');

// element.innerHTML='I am learning JS';
// ul.append(element)

// ul.replaceWith(element)

// let myul=document.querySelector('.this');
// console.log(myul);
// myul.removeChild(document.getElementById('lui'))

// Quick Quiz
// Q. Create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href="https://codewithharry.com/"

// Solution
let container=document.querySelector('.container')
let h1=document.createElement('h1');
h1.innerHTML='Go to CodeWithHarry';
let links=document.createElement('a');
links.setAttribute('href','https://codewithharry.com');
// console.log(links);
links.innerText="Links of CWH"
console.log(h1);
container.appendChild(h1)
container.appendChild(links)
