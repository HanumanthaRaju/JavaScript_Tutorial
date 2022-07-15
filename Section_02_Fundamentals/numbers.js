//integer numbers
let counter=100;

//Octal numbers
//An octal literal number starts with the digit zero (0),
//followed by a sequence of octal digits (numbers from 0 through 7).

let num1 = 071;
console.log(num1);
let num2 = 080;
console.log(num2);
let num3 = 0o71;
console.log(num3);

let num4 = 0o80;  //Syntax Errors
console.log(num4);

//Hexadecimal numbers
//Hexadecimal numbers start with 0x or 0X followed by any number of hexadecimal digits 
//(0 through 9, and a through f). 
let num5 = 0x1a;
console.log(num5);

//Floating Point numbers
let price = 9.99;
let tax = 0.08;
let discount = .05; // valid but not recommeded
let amount1 = 3.14e7;
console.log(amount1);

//The notation 3.14e7 means that take 3.14 and multiply it by 107.
let amount2 = 5e-7; 
console.log(amount2);

let amount3 = 0.0000005;
console.log(amount3);

let amount4 = 0.2 + 0.1;
console.log(amount4);

//Big integer
//JavaScript introduced the bigint type starting in ES2022. 
//The bigint type stores whole numbers whose values are greater than 253 – 1.
//A big integer literal has the n character at the end of an integer literal
let pageView = 9007199254740991n;


