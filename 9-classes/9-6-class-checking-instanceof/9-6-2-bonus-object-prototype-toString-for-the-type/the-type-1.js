// copy toString method into a variable for convenience 
let objectToString = Object.prototype.toString; 

// what type is this ?
let arr = [];

alert( objectToString.call(arr) ); // [object Array] 

