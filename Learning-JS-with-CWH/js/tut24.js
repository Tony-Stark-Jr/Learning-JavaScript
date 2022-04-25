// Date Object: Date & Time in Javascript

let today = new Date();
// console.log(today);

let otherDate = new Date('8-4-2020 4:54:8');
console.log(otherDate);

let a = otherDate.getDate();
a = otherDate.getFullYear();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
a = otherDate.getSeconds();
a = otherDate.getTime();
a = otherDate.getHours();
console.log(a);

otherDate.setDate(31);
otherDate.setHours(5);
otherDate.setMonth(4);
otherDate.setMilliseconds(55);
otherDate.setSeconds(60);
otherDate.setFullYear(2004);
console.log(otherDate);

