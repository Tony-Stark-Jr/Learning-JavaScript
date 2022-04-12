// console.log("More on JavaScript Events");
let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);


// function func1(e) {
//     e.preventDefault();
//     console.log("Thanks", e);
// }

// btn.addEventListener('mousedown', (e) => {
//     console.log("Thanks its a mouse down", e);
//     e.preventDefault();
// })


// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('You enter no');
// })

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('You leave no');
// })

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX);
    console.log(e.offsetY);
    document.body.style.backgroundColor='red'
    console.log('You trigreed mouse move event ');
})