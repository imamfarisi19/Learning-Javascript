let str = "Hello";
let str = 'Single quotes are ok too';
let str = `can embed another ${str}`;

let name = "John";
//embed a variable
alert(`Hello, ${name}!`); // Hello, John!

//embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

alert("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)