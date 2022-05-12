// Creating an Alarm App: Exercise 6
// Q. You have to create an alarm clock in JavaScript (Use your creativity)
// Q. Allow user to set alarm for a certain time


// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
// audio.play();

let timeInput = document.getElementsByClassName('inputime')
console.log(timeInput.value);

let time = new Date().toLocaleTimeString();
console.log(time);

// function getLocaltime(){
//     return new Date().toLocaleTimeString();
//   }
//   console.log(getLocaltime())


// if(timeInput)