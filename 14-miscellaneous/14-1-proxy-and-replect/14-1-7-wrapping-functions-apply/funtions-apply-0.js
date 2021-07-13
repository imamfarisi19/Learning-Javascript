function delay(f, ms) {
	// return a wrapper that passes the call to f after the timeout 
	return function() { // (*)
		setTimeout(() => f.apply(this, arguments), ms);
	};
}

function sayHi(user) {
	alert(`Hello, ${user}!`);
}

// after this wrapping, calls to sayHi will be delayedfor 3 seconds
sayHi = delay(sayHi, 3000);

sayHi("John"); // Hellom, John! (after 3 seconds)

