# JavaScript Fundamentals

Here we will learn about JavaScript syntax, including whitespace, statements, identifiers, comments, expressions, and keywords.

### Whitespace
Refers to characters with a space between other characters, JS has whitespaces related to: Carriage return, Space, New line, Tab.
JS Engine ignores the whitespace, but the usage of whitespace is recommended to enhance the readability and manitainance of the code with a proper indentation.

JS bundlers remove all whitespaces and puts them in a single file for deployment, this way bundlers make JS code lighter and faster in web browsers

### Statements
Statement declares a variable or instructs a JS engine to do certain tasks, Statements are terminated by semicolon (;).

### Blocks
A block is a sequence of zero or more simple statements. A block is delimited by a pair of curly brackets {}

### Identifiers
Its a name given to a variables, parameters, function, classes etc. 

An identifier name starts with a letter (a-z, or A-Z), an underscore(_), or a dollar sign ($) and is followed by a sequence of characters including (a-z, A-Z), numbers (0-9), underscores (_), and dollar signs ($).

Identifiers are case-sensitive. 

### Comments
used to add notes to the code, JS engine ignores it while in execution. Supports Single line and multi line comment

### Single-line comments
Starts with (//)

### Block comments
Begins with forward slash and asterisk /* and ends with */.

### Expressions
Evaluates to a value.

### Keywords & Reserved words
Cannot be used as identifiers

![outcome](./02.JPG)

Some of the Future reserved words which cannot be used as identifiers.

![outcome](./03.JPG)

An example showcasing whitespaces, statements, comments, Expression, blocks etc.
![outcome](./04.JPG)

### Summary
1. Use whitespace including cariage return, space, newline, and tab to format the code. The JavaScript engine ignores the whiespace.
2. Use a semicolon (;) to terminate a simple statement.
3. Use the curly braces ({}) to form a block that groups one or more simple statments.
4. A single-line comment start with // followed by a text. A block comment begins with /* and ends with */. JavaScript engine also ignores the comments.
5. Identifers are names that you choose for variables, functions, classes, etc.
6. Do not use the reserved keywords and reserved words for identifers.



# JavaScript Variables
We will learn about JavaScript variables and how to use variables to store values in the application.

A variable is a label that references a value like a number or string. Before using a variable, you need to declare it.

### Declaring a Variable
Use **var** keyword followed by the variable name

**var var_name;**

if no value is assigned, variable will have a **undefined value** in it, variable names follows the rule of identifiers, by convention variable **uses camel case**.

In **ES6 let** keyword is used to declare a variable.

**let var_name;**

Its always good practice to declare variable name using let keyword, there are further differences between declaring with let and var which will be discussed later

### Initialize a variable
Once a variable is declared, initialize a variable by using equal(=) sign. Different ways of initializing a variable is shown below.

**let message="Hello";**

**let message1="HelloWorld", counter=50;**

**let message2="World";**

**message2="Hello";**

### Undefined vs Undeclared variables
**let message;**

**console.log(message); //Undefined variable**

**console.log(coounters); //Undeclared variable**

### Constants
Constants hold value that doesnot change.

**const x=10;**

**x=20; //throws an error**

![outcome](./05.JPG)

### Summary
1. A variable is a label that references a value.
2. Use the let keyword to declare a variable.
3. An undefined variable is a variable that has been declared but not initialized while an undeclared variable is variable that has not been declared.
4. Use the const keyword to define a readonly reference to a value.

# JavaScript DataTypes
We list available datatype in JavaScript and its characteristics

Primitive datatypes in JavaScript

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol – available from ES2015
7. bigint – available from ES2020
8. and a complex data type object.

![outcome](./06.JPG)

Example demonstrating all the primitive datatypes:

![outcome](./07.JPG)

![outcome](./08.JPG)

![outcome](./09.JPG)

### The Object type
In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.

The following example defines an empty object using the object literal syntax:

![outcome](./10.JPG)

### Summary
JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.

# number
We will learn about the JavaScript number types and how to use them effectively.

![outcome](./11.JPG)

### Summary
JavaScript Number type reprensents both integer and floating-point numbers.


