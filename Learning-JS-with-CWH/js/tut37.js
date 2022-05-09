// Callback function in Javascript

const students = [
    { name: "Santosh Marar", subject: "MERN Stack" },
    { name: "Dipak Pramani", subject: "+2 commerce" }
]

function enrollStudent(student, callback) {
    setInterval(() => {
        students.push(student);
        callback;
    }, 1000);
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
enrollStudent(student1, getStudents());
