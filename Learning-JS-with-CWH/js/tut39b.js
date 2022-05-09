// Uses of promise
// Something is wrong in this program I have to fix 
const students = [
    { name: "Santosh Marar", subject: "MERN Stack" },
    { name: "Dipak Pramani", subject: "+2 commerce" }
]

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setInterval(() => {
            const error = false;
            students.push(student);

            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 1000);
    })
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach((student) => {
            str += `<li>Student Name: ${student.name} & their subject ${student.subject}</li>`
        })
        document.getElementById("students").innerHTML = str;
    }, 2000)

}


const student1 = { name: "Sunny", subject: "Python" }
enrollStudent(student1).then(getStudents()).catch(() => {
    console.log("Everything is not okay");
});

// console.log("This is tutorial 37");

// // Pretend that this response is coming from the server
// const students = [
//     { name: "harry", subject: "JavaScript" },
//     { name: "Rohan", subject: "Machine Learning" }
// ]


// function enrollStudent(student) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000);
//     })
// }

// function getStudents() {
//     setTimeout(function () {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 5000);
// }

// let newStudent = { name: "Sunny", subject: "Python" }
// enrollStudent(newStudent).then(getStudents).catch(function () {
//     console.log("Some error occured");
// });
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
