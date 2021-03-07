let obj = {};
obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object object] - the value is an object, didn't work as intended 

