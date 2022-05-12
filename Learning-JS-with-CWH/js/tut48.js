// Regular Expressions - Charager sets

// Regular Expressions:
//Basic functions
//Metacharager Symbols
// const regex = /^h/i;

//Character Sets - We use []
let regex = /harry/;
regex = /h[a-z]rry/;  // can be any character from a to z
regex = /h[aty]rry/;  // can be an a, t or y
regex = /h[^aty]rry/;  // can't be any of a, t or y
regex = /h[^aty]rr[yu]/; // can't be any of a, t, or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][\?]/; // we can have as many character sets as we want

let str = "hArr9? bhai";

// Quantifiers - We use []
regex = /har{2}y/ // r{2} means r can occur exactly 2 times
regex = /har{0,2}y/ // r{0,2} means r can occur exactly 0 to 2 (0 or 1 or 2) times

// Groupings - we use paranthesis for groupings()
regex = /(har){2}[0-9]y{3}/

str = 'harhar1yyy bhai'

let result = regex.exec(str);
console.log('The result from exec is ', result);

if (str.match(regex)) {
    console.log(`The string ${str} match the expression ${regex.source}`);
}
else {
    console.log(`The string ${str} does not  match the expression ${regex.source}`);
}