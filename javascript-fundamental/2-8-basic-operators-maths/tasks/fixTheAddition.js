// Why ? Fix it. The result should be 3.

let a = prompt("First number ?", 1);
let b = prompt("Second number ?", 2);

alert(a+b); // 12

//----------------------------------
// The reason is that prompt returns user input as a string. 
// So variables have values "1" and "2" respectively. 

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number ?", 2);

alert(a+b); // 12

//---------------------------------
// What we should do is to convert strings to numbers before +. For example, using Number() or prepending them with +.

// For example, right before prompt:

// Convert to number with '+'
let a = +prompt("First number?", 1);

// Convert to number with '+'
let b = +prompt("Second number?", 2);

//put to modal
alert(a + b); // 3

// Or in the alert :

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

