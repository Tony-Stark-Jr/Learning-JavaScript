// Fetch api in JavaScript


// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// Div with id content
let content = document.getElementById("content");

// function getData() {
//     url='harry.txt'
//     fetch(url).then(function (response) {
//         return response.text();
//     }).then((data)=>{
// console.log(data);
//     })
// }
// getData();


// function getData() {
//     url='https://api.github.com/users'
//     fetch(url).then(function (response) {
//         return response.json();
//     }).then((data)=>{
// console.log(data);
//     })
// }
// getData();




function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglrharry4745","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then((data)=>{
        console.log(data);
    })
}
postData();


