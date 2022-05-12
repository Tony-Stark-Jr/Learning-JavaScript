// Shorthand character classes (Regular Expressions) In Javascript

// Character classes
let regex = /\wrry/; // w stand for word character or alphabet or numbers
regex = /\w+rry/;          // \+ means one or more word characters
regex = /\Wbhai/;          // Non word character
regex = /\W+bhai/;          // \W+ means more than one non word character
regex = /number \d999/;      // \d means digit
regex = /number \d+999/;     // \d+ means more than one digit
regex = /number \d+999/;     // \d+ means more than one digit
regex = /\D999/;            // \D means non digit
regex = /\D+999/;            // \D+ means more than one non digit
regex = /\ska number/;       // \s means match whitespace character
regex = /\s+ka number/;      // \s means match one or more whitespace character
regex = /\Ska number/;      // \S means non whitespace character
regex = /\S+ka number/;      // \S means meach one or more than one non whitespace character
regex = /\bka\b number/;      // \b for word boundary

// Assertions
regex=/h(?=y)/
regex=/h(?!=y)/
str = 'aidq1%rrrhy bai ka number 144et99999393849'



let result = regex.exec(str);
console.log('The result from exec is ', result);

if (str.match(regex)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not  match the expression ${regex.source}`);
}