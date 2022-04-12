// console.log("Events & Event Object in JavaScript");

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList)

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href= '//codewithharry.com'

})

// let history = window.history
// history.go[-1]
// console.log(history);