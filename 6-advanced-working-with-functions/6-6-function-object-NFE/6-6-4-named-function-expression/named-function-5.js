let sayHi = function(who) {
	if(who) {
		alert(`Hello, ${who}`);
	} else {
		sayHi("Guest"); // Error: sayHi is not a function
	}
}; 

let welcome = sayHi;
sayHi = null;

welcome(); // Error, the nested sayHi call doesn't work any more!

