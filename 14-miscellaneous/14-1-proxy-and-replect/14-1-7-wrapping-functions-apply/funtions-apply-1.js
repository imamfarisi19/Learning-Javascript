function delay(f, ms) {
	return function() {
		setTimeout(() => f.apply(this.arguments), ms);
	}; 
}

function sayHi(user) {
	alert(`Hello, ${user}!`);
}

alert(sayHi.length); // 1 (function length is the arguments count in its declaration)

sayHi = delay(sayHi, 3000);

alert(sayHi.lenght); // 0 (in the wrapper declaration, there are zero arguments)

