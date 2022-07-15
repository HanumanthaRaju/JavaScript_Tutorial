let counter = 120; // counter is a number
counter = false;   // counter is now a boolean
counter = "foo";   // counter is now a string

//To get the current type of the value that the variable stores, you use the typeof operator:
console.log(typeof(counter)); // "number"

counter = false; 
console.log(typeof(counter)); // "boolean"

counter = "Hi";
console.log(typeof(counter)); // "string"

let counter1;
console.log(counter1);        // undefined
console.log(typeof counter1); // undefined

console.log(typeof undeclaredVar); // undefined, displays undefined eventhough it is not declared

//null type
let obj = null;
console.log(typeof obj); // object

console.log(null == undefined); // true

//number type
let num = 100;
let price1= 12.5; 
let discount = 0.05;

let price2 = 200.00; // interpreted as an integer 200

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

//NaN
console.log('a'/2); // NaN;
console.log(NaN/2); // NaN
console.log(NaN == NaN); // false

//String type
let greeting = 'Hi';
let message1  = "Bye";

let message2 = 'I\'m also a valid string'; // use \ to escape the single quote (')

let str = 'JavaScript';
str = str + ' String';

//boolean type
let inProgress = true;
let completed = false;

console.log(typeof completed); // boolean

console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false

//Symbol type
let s1 = Symbol();
console.log(Symbol() == Symbol()); // false

//bigint type
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'
