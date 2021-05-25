let sayHi = function func(who) {
	if(who) {
		alert(`Hello, ${who}`);
	} else {
		func("Guest"); // Now all fine
	}
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (nested call works)

