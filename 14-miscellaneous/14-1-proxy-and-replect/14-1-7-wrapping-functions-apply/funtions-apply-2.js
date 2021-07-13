function delay(f, ms) {
	return new Proxy(f, {
		apply(target, thisArg, args) {
			setTimeout(() => target.apply(thisArg, args), ms);
		}
	});
}

function sayHi(user) {
	alert(`Hello, ${user}!`); 
}

sayHi = delay(sayHi, 3000); 

alert(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target 

sayHi("John"); // Hello, John! (after 3 seconds)

