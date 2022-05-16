
function updateClock() {
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute or second is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    // Prepare the time string from hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMinutes
        + ":" + currentSeconds + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}

// 1st Way
// function updateDate() {
//     let currentDate = new Date();

//     let currentYears = currentDate.getFullYear();
//     let currentMonths = currentDate.getMonth();
//     let currentDay = currentDate.getDate();

//     currentMonths = currentMonths + 1;

//     let DAte=currentDate.toLocaleDateString();
//     console.log(DAte);


//     let date = currentYears + "/" + currentMonths + "/" + currentDay;

//     document.getElementById("date").innerHTML = date;
// }

// 2nd way
function updateDate() {
    let currentDate = new Date();

    let currentFullDate = currentDate.toDateString();
    document.getElementById("date").innerHTML = currentFullDate;
}
