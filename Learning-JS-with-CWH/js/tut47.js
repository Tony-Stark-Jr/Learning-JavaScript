// Regular Expressions - Metacharacters in JavaScript

let regex = /harrsdfgy/
// Lets look into some metacharacter symbols
regex = /^harr/; // ^ means expession will match if string starts with
regex=/ry$/; // $ at the end of the strings means "string ends with"
regex=/h.rry/ // matches any one character
regex=/h*rry/ // matches any 0 or more  characters
regex=/ha?rryi?/ // ? after character means that character is optional
regex=/h\&rry/ // if you want to exact special symbol

let str = 'h&rry'

let result = regex.exec(str);
console.log('The result from exec is ', result);

if (str.match(regex)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not  match the expression ${regex.source}`);
}