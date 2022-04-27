// Ajax tutorial

const fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'harry.txt', true);
    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // xhr.onreadystatechange=function(){
    //     console.log('ready state is', xhr.readyState);
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    // send the request
    params = "name=test&salary=123&age=23"
    xhr.send(params);
}

const popBtn = document.getElementById('backupBtn')
popBtn.addEventListener('click', popHandler);

function popHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'harry.txt', true);


    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list')
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_name}</li>`
            }

            list.innerHTML = str;
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
}

// Q. Make a json file i.e vegatable and fruit and fetch with button and display in website