function f(sayHi = function() {}) {
	alert(sayHi.name); // sayHi (works!)
}

f();
